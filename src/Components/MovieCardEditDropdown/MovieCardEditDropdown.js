import React from 'react';

import { MovieCardEditList } from '../MovieCardEditList/MovieCardEditList';

export default function MovieCardEditDropdown({showDropdown, showMovieCard}) {
    return (
        <MovieCardEditList>
            <button onClick={() => showDropdown(false)}/>
            <ul>
                <li><a href="#">Edit</a></li>
                <li onClick={() => showMovieCard(false)}><a href="#">Delete</a></li>
            </ul>
        </MovieCardEditList>
    )
};


