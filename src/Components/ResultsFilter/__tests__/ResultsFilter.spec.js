import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ResultsFilter from '../ResultsFilter';

describe('ResultsFilter', () => {
    const moviesList = {
        data: []
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(moviesList);

    it('render result filter component', async () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <ResultsFilter />
                </Router>
            </Provider>
        );
        expect(getByText('Adventure')).toBeInTheDocument();
    });
})
