import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

import { MovieCardEditList } from '../Components/MovieCardEditList/MovieCardEditList';

export default function MovieCardEditDropdown({ showDropdown, id }) {
    return (
        <MemoryRouter>
            <MovieCardEditList>
                <button onClick={() => showDropdown(false)} data-testid="close-icon"/>
                <ul>
                    <Link to={`/edit/movie/${id}`}>
                        <li data-testid="edit-link">Edit</li>
                    </Link>
                    <Link to={`/delete/movie/${id}`}>
                        <li>Delete</li>
                    </Link>
                </ul>
            </MovieCardEditList>
        </MemoryRouter>
    )
};

MovieCardEditDropdown.protoTypes ={
    showDropdown: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}
