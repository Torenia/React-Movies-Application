import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import App from '../../../App';
import DeleteMovieModal from '../DeleteMovieModal';

const moviesList = {
    data: [{
        id: 181808,
        title: "Star Wars: The Last Jedi",
        vote_average: 7.1,
        vote_count: 4732,
        release_date: "2017-12-13",
        poster_path: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        genres: ["Fantasy", "Adventure", "Science Fiction"],
        runtime: 152
    }]
};

const middlewares = [thunk];
const initialState = moviesList;
const mockStore = configureStore(middlewares);
let store = mockStore(initialState);

beforeEach(cleanup);

describe('DeleteMovieModal', () => {
    it('open delete movie modal', () => {
        const { getByText, getByTestId } = render(<Provider store={store}><App /></Provider>);
        const searchBtn = getByText('Search');
        fireEvent.click(searchBtn);
        const movie = getByText('Star Wars: The Last Jedi');
        fireEvent.mouseOver(movie);
        const dropdownIcon = getByTestId('dropdown-icon');
        fireEvent.click(dropdownIcon);
        const deleteButton = getByText('Delete');
        fireEvent.click(deleteButton);
        expect(getByText('Delete Movie')).toBeInTheDocument();
        expect(getByText('Are you sure you want to delete this movie?')).toBeInTheDocument();
    })

    it('close delete movie modal', () => {
        const { getByText, getByTestId } = render(<Provider store={store}><App/></Provider>);
        const closeModal = getByTestId('close-delete-movie-modal');
        expect(closeModal).toBeInTheDocument();
        fireEvent.click(closeModal);
        expect(() => getByText('Delete Movie')).toThrow('Unable to find an element');
    })

    it('delete movie', async () => {
        const { getByText, getByTestId } = render(<Provider store={store}><App/></Provider>);
        const searchBtn = getByText('Search');
        fireEvent.click(searchBtn);
        const movie = getByText('Star Wars: The Last Jedi');
        fireEvent.mouseOver(movie);
        const dropdownIcon = getByTestId('dropdown-icon');
        fireEvent.click(dropdownIcon);
        const deleteButton = getByText('Delete');
        fireEvent.click(deleteButton);
        const deleteMovieBtn = getByText('Confirm');
        const deleteMovieFunc = () => {
            nock('http://localhost:4000')
                .delete('/movies/181808')
                .reply(200)
        }
        const mockHistoryPush = jest.fn();

        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
                push: mockHistoryPush,
            }),
        }));
        fireEvent.click(deleteMovieBtn);
        try {
            await (() => {
                deleteMovieFunc();
                expect(mockHistoryPush).toHaveBeenCalledWith('/');
            });
        } catch (e) {
            console.error(e);
            throw e;
        }
        expect(() => getByText('Star Wars: The Last Jedi')).toThrow('Unable to find an element');
    })
});

