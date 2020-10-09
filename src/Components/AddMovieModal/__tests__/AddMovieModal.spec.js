import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import AddMovieModal from '../AddMovieModal'
import App from '../../../App'

describe('AddMovieModal', () => {
    const moviesList = {
        data: []
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(moviesList);

    test('show add movie button', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <App><AddMovieModal /></App>
                </Router>
            </Provider>
        )
        const link = getByText('+ add movie');
        expect(link).toBeInTheDocument();
    })
})
