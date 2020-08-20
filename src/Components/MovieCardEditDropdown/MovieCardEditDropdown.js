import React from 'react';
import PropTypes from 'prop-types';

import { MovieCardEditList } from '../MovieCardEditList/MovieCardEditList';

export default function MovieCardEditDropdown({ showDropdown }) {
    return (
        <MovieCardEditList>
            <button onClick={() => showDropdown(false)}/>
            <ul>
                <li><a href="#">Edit</a></li>
                <li><a href="#">Delete</a></li>
            </ul>
        </MovieCardEditList>
    )
};

MovieCardEditDropdown.protoTypes ={
    showDropdown: PropTypes.bool.isRequired
}
