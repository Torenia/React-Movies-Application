import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import React from 'react';
import nock from 'nock';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MoviesCards from '../MoviesCards';
import App from '../../../App';

const moviesList = {
    totalAmount: 2,
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
    },
        {
            id: 140607,
            title: "Star Wars: The Force Awakens",
            vote_average: 7.4,
            vote_count: 9863,
            release_date: "2015-12-15",
            poster_path: "https://image.tmdb.org/t/p/w500/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
            overview: "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
            genres: ["Action", "Adventure", "Science Fiction", "Fantasy"],
            runtime: 136
        }]
};

afterEach(cleanup);

describe('MoviesCards', () => {
    it('finds title', () => {
        const { getByText } = render(<Router><MoviesCards state={moviesList} /></Router>);
        expect(getByText('Star Wars: The Last Jedi')).toBeInTheDocument();
    })
    it('finds release date', () => {
        const { getByText } = render(<Router><MoviesCards state={moviesList} /></Router>);
        expect(getByText('2015-12-15')).toBeInTheDocument();
    })
    it('finds genres', () => {
        const { getByText } = render(<Router><MoviesCards state={moviesList} /></Router>);
        expect(getByText('Action, Adventure, Science Fiction, Fantasy')).toBeInTheDocument();
    })
});

describe('GET movies', () => {
    const initialState = {
        totalAmount: '',
        data: [],
        movie: {},
        isLoading: false,
        error: null
    }
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(initialState);
    test('returns mock movies', async () => {
        const { getByText } = render(<Provider store={store}><App/></Provider>)
        const searchBtn = getByText('Search');
        fireEvent.click(searchBtn);
        await (() => {
            nock('http://localhost:4000')
                .get('/movies/')
                .query({params: {searchBy: 'title', search: 'star'}})
                .reply(200, moviesList);
            expect(getByText('Star Wars: The Last Jedi')).toBeInTheDocument();
        });
    });
});

