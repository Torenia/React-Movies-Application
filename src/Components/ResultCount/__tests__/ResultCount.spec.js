import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import ResultCount from '../ResultCount'

const totalAmount = {
    totalAmount: 5
};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(totalAmount);

describe('ResultCount', () => {
    it('should render result count element', () => {
        const { getByText } = render(<Provider store={store}><Router><ResultCount/></Router></Provider>);
        expect(getByText('5')).toBeInTheDocument();
        expect(getByText('movies found')).toBeInTheDocument();
    })
})
