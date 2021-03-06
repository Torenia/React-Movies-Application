import {render, cleanup} from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fireEvent } from '@testing-library/dom';

import MovieDetails from '../MovieDetails';

const movie = {
    movie: {
        id: 181808,
        title: "Star Wars: The Last Jedi",
        vote_average: 7.1,
        vote_count: 4732,
        release_date: "2017-12-13",
        poster_path: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        genres: ["Fantasy", "Adventure", "Science Fiction"],
        runtime: 152
    }
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(movie);

afterEach(cleanup);

describe('MovieDetails', () => {
    it('finds title', () => {
        const { getByText } = render(<Provider store={store}><Router><MovieDetails /></Router></Provider>);
        expect(getByText('Star Wars: The Last Jedi')).toBeInTheDocument();
    })
    it('finds release date', () => {
        const { getByText } = render(<Provider store={store}><Router><MovieDetails /></Router></Provider>);
        expect(getByText('2017-12-13')).toBeInTheDocument();
    })
    it('finds genres', () => {
        const { getByText } = render(<Provider store={store}><Router><MovieDetails /></Router></Provider>);
        expect(getByText('Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.')).toBeInTheDocument();
    })
});

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('MovieDetails', () => {
    it('should close movie details', () => {
        const { getByRole } = render(<Provider store={store}><Router><MovieDetails/></Router></Provider>);
        fireEvent.click(getByRole('button'));
        expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
});

