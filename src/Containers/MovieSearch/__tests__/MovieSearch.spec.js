import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MovieSearch from '../MovieSearch';

describe('MovieSearch', () => {
    const moviesList = {
        data: []
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(moviesList);

    it('render movie search component', async () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <MovieSearch />
                </Router>
            </Provider>
        );
        expect(getByText('Search')).toBeInTheDocument();
    });

    it('set input value',  () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <MovieSearch/>
                </Router>
            </Provider>
        );
        const searchInput = getByTestId('search-input');
        fireEvent.input(searchInput, { target: { value: 'Movie' } });
        expect(searchInput.value).toBe( 'Movie');

        fireEvent.keyDown(searchInput, { target: { value: 'Movie' } });
        expect(searchInput.value).toBe( 'Movie');
    });
})
