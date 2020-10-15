import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import AddEditMovieModalForm from '../AddEditMovieModalForm';
import App from '../../../App';

beforeEach(cleanup);

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('AddEditMovieModalForm', () => {
    const moviesList = {
        data: []
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(moviesList);

    it('modal opens when button clicked', async () => {
        const { getByText } = render(
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );
        const link = getByText('+ add movie');
        fireEvent.click(link);
        expect(getByText('Add Movie')).toBeInTheDocument();
    });

    it('submits correct values', async () => {
        const handleSubmit = jest.fn();
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <AddEditMovieModalForm onSubmit={handleSubmit}/>
                </Router>
            </Provider>
        );
        const title = container.querySelector('input[name="title"]');
        const releaseDate = container.querySelector('input[name="release_date"]');
        const posterPath = container.querySelector('input[name="poster_path"]');
        const overview = container.querySelector('input[name="overview"]');
        const runtime = container.querySelector('input[name="runtime"]');
        const submit = container.querySelector('button[type="submit"]');

        fireEvent.change(title, { target: { value: 'Mock title' } });
        expect(title.value).toBe('Mock title');

        fireEvent.change(releaseDate, { target: { value: 'Mock release date' } });
        expect(releaseDate.value).toBe('Mock release date');

        fireEvent.change(posterPath, { target: { value: 'Mock poster path' } });
        expect(posterPath.value).toBe('Mock poster path');

        fireEvent.change(runtime, { target: { value: '10' } });
        expect(runtime.value).toBe('10');

        fireEvent.change(overview, { target: { value: 'Mock overview' } });
        expect(overview.value).toBe('Mock overview');

        fireEvent.click(submit);

        await (() => {
            expect(handleSubmit).toHaveBeenCalledWith({ title: 'Mock title', releaseDate: 'Mock release date',
                posterPath: 'Mock poster path', overview: 'Mock overview', runtime: Number('10')});
        })
    })

    it('should show validation on blur', async () => {
        const { container, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <AddEditMovieModalForm/>
                </Router>
            </Provider>
        );
        const title = container.querySelector('input[name="title"]');

        fireEvent.blur(title);

        await (() => {
            expect(getByTestId('emailError')).not.toBe(null);
            expect(getByTestId('emailError')).toHaveTextContent('Required');
        });
    });

    it('should validate runtime', async () => {
        const { container, getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <AddEditMovieModalForm/>
                </Router>
            </Provider>
        );
        const runtime = container.querySelector('input[name="runtime"]');

        fireEvent.change(runtime, { target: { value: 'Mock runtime' } });

        await (() => {
            expect(getByTestId('emailError')).not.toBe(null);
            expect(getByTestId('emailError')).toHaveTextContent('Runtime must be a number');
        });
    });

    it('should change release date input type', async () => {
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <AddEditMovieModalForm/>
                </Router>
            </Provider>
        );
        const release_date = container.querySelector('input[name="release_date"]');

        fireEvent.focus(release_date, { target: { type: 'date' } });
        expect(release_date.type).toBe('date');

        fireEvent.blur(release_date, { target: { type: 'text' } });
        expect(release_date.type).toBe('text');
    });

    it('should add movie', async () => {
        const handleSubmit = jest.fn();
        const { container } = render(
            <Provider store={store}>
                <Router>
                    <AddEditMovieModalForm onSubmit={handleSubmit}/>
                </Router>
            </Provider>
        );
        const submit = container.querySelector('button[type="submit"]');

        fireEvent.click(submit);

        const data = { title: 'Mock title', releaseDate: 'Mock release date',
            posterPath: 'Mock poster path', overview: 'Mock overview', runtime: 'Mock runtime'};

        try {
            await (() => {
                nock('http://localhost:4000')
                    .post('/movies')
                    .reply(200, data);
                expect(mockHistoryPush).toHaveBeenCalledWith('/');
            });
        } catch (e) {
            console.error(e);
            throw e;
        }
    });

    it('should close popup', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <AddEditMovieModalForm/>
                </Router>
            </Provider>
        );

        fireEvent.click(getByTestId('close-popup'));
        await (() => {
            expect(mockHistoryPush).toHaveBeenCalledWith('/');
        });
    });
})
