import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ResultsSort from '../ResultsSort';

describe('ResultsSort', () => {
    const moviesList = {
        data: []
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(moviesList);

    it('render results search component', async () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <ResultsSort />
                </Router>
            </Provider>
        );
        expect(getByText('Sort by')).toBeInTheDocument();
        expect(getByTestId('release-date').selected).toBe(true);
    });
})
