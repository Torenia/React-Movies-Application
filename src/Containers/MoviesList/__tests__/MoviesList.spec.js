import React from 'react'
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {MemoryRouter as Router} from 'react-router';

import MoviesList from '../MoviesList'

const moviesList = {
    totalAmount: 31,
    data: []
}

describe('MoviesList', () => {
    const middlewares = [thunk];
    const initialState = moviesList;
    const mockStore = configureStore(middlewares);

    it('Shows list page', () => {
        let store = mockStore(initialState);
        const { getByText } = render(<Provider store={store}><Router><MoviesList /></Router></Provider>);
        expect(getByText('No Movie Found')).not.toBeNull();
    })
})
