import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import MoviesResults from '../MoviesResults';

const initialState = {
    totalAmount: 31,
    data: []
}

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initialState);

describe('MoviesResults', () => {
    it('shows empty result state', () => {
        const { getByText } = render(<Provider store={store}><Router><MoviesResults /></Router></Provider>)
        expect(getByText('No Movie Found')).not.toBeNull()
    })
});
