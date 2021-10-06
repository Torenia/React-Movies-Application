import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MovieCardEditList } from '../MovieCardEditList/MovieCardEditList';

export default function MovieCardEditDropdown({ showDropdown, id }) {
    const hideDropdown = useCallback(() => {
        showDropdown(false);
    }, []);

    return (
        <MovieCardEditList>
            <button onClick={hideDropdown} data-testid="close-icon"/>
            <ul>
                <Link to={`/edit/movie/${id}`}>
                    <li data-testid="edit-link">Edit</li>
                </Link>
                <Link to={`/delete/movie/${id}`}>
                    <li>Delete</li>
                </Link>
            </ul>
        </MovieCardEditList>
    )
};

MovieCardEditDropdown.protoTypes ={
    showDropdown: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}
