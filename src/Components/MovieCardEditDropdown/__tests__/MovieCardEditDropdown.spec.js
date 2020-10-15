import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';

import MovieCardEditDropdown from '../MovieCardEditDropdown';
import MoviesCards from '../../../Containers/MoviesCards/MoviesCards';

const moviesList = {
    data: [{
        id: 181808,
        title: "Star Wars: The Last Jedi",
        vote_average: 7.1,
        vote_count: 4732,
        release_date: "2017-12-13",
        poster_path: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        genres: ["Fantasy", "Adventure", "Science Fiction"],
        runtime: 152
    }]
};

afterEach(cleanup);

describe('MovieCardEditDropdown', () => {
    it('show and hide dropdown', () => {
        const { getByText, getByRole, queryByTestId } = render(<Router><MoviesCards state={moviesList} /></Router>);
        const movie = getByText('Star Wars: The Last Jedi');
        expect(movie).toBeInTheDocument();
        fireEvent.mouseEnter(movie);
        const dropdownIcon = getByRole('button');
        expect(dropdownIcon).toBeInTheDocument();
        fireEvent.click(dropdownIcon);
        expect(getByText('Delete')).toBeInTheDocument();
        expect(getByText('Edit')).toBeInTheDocument();
        const closeIcon = queryByTestId ('close-icon');
        expect(closeIcon).toBeInTheDocument();
        fireEvent.click(closeIcon);
        expect(() => getByText('Delete')).toThrow('Unable to find an element');
    })

    it('hide dropdown icon', () => {
        const { getByText, getByRole, queryByTestId } = render(<Router><MoviesCards state={moviesList} /></Router>);
        const movie = getByText('Star Wars: The Last Jedi');
        expect(movie).toBeInTheDocument();
        fireEvent.mouseEnter(movie);
        const dropdownIcon = getByRole('button');
        expect(dropdownIcon).toBeInTheDocument();
        fireEvent.mouseLeave(movie);
        expect(dropdownIcon).not.toBeInTheDocument();
    })
});
