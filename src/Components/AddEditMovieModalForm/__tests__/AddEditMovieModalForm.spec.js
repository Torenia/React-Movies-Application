import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import AddEditMovieModalForm from '../AddEditMovieModalForm';
import AddMovieModal from '../../AddMovieModal/AddMovieModal';
import App from '../../../App';

afterEach(cleanup);

describe('AddEditMovieModalForm', () => {
    const moviesList = {
        data: []
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(moviesList);

    test('modal opens when button clicked', () => {

        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <App>
                        <AddMovieModal>
                            <AddEditMovieModalForm  header="Add Movie" showMovieIdRow={false} buttonName="Submit"/>
                        </AddMovieModal>
                    </App>
                </Router>
            </Provider>
        );
        const link = getByText('+ add movie');
        expect(link).toBeInTheDocument();
        fireEvent.click(link);
        expect(jest.fn()).toHaveBeenCalled();
        expect(getByText('Add movie')).toBeInTheDocument();
    });

})
