import React from 'react'
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import App from './App'

const moviesList = {
    totalAmount: 31,
    data: []
}

describe('App', () => {
    const middlewares = [thunk];
    const initialState = moviesList;
    const mockStore = configureStore(middlewares);

    it('Shows "Find your movie"', () => {
        let store = mockStore(initialState);
        const { getByText } = render(<Provider store={store}><App /></Provider>);
        expect(getByText('find your movie')).not.toBeNull();
    })
})
