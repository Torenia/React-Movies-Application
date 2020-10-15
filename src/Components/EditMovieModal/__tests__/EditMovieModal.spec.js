import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import EditMovieModal from '../EditMovieModal'
import App from '../../../App'

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

afterEach(cleanup);

describe('EditMovieModal', () => {
    it('show edit movie modal', async () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}><Router><App /></Router></Provider>
        )
        const searchBtn = getByText('Search');
        fireEvent.click(searchBtn);
        const movie = getByText('Star Wars: The Last Jedi');
        fireEvent.mouseOver(movie);
        const dropdownIcon = getByTestId('dropdown-icon');
        fireEvent.click(dropdownIcon);
        const editButton = getByTestId('edit-link');
        fireEvent.click(editButton);
        expect(getByText('Edit Movie')).toBeInTheDocument();
    })
})
