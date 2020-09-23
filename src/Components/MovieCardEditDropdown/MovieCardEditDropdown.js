import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MovieCardEditList } from '../MovieCardEditList/MovieCardEditList';

export default function MovieCardEditDropdown({ showDropdown, id }) {
    return (
        <MovieCardEditList>
            <button onClick={() => showDropdown(false)}/>
            <ul>
                <Link to={`/edit/movie/${id}`}>
                    <li>Edit</li>
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
