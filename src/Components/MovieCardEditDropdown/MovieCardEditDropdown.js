import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { MovieCardEditList } from '../MovieCardEditList/MovieCardEditList';
import MovieModal from '../../Containers/MovieModal/MovieModal';
import EditMovieModal from '../EditMovieModal/EditMovieModal';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';

export default function MovieCardEditDropdown({ showDropdown }) {
    const [isShownMovieModal, setIsShownEditMovieModal] = useState(false);
    const [isShownDeleteMovieModal, setIsShownDeleteMovieModal] = useState(false);

    return (
        <MovieCardEditList>
            <button onClick={() => showDropdown(false)}/>
            {isShownMovieModal && <MovieModal>
                <EditMovieModal
                    isShownMovieModal={setIsShownEditMovieModal}
                />
            </MovieModal>}
            {isShownDeleteMovieModal && <MovieModal>
                <DeleteMovieModal
                    isShownMovieModal={setIsShownDeleteMovieModal}
                />
            </MovieModal>}
            <ul>
                <li onClick={() => setIsShownEditMovieModal(true)}><a href="#">Edit</a></li>
                <li onClick={() => setIsShownDeleteMovieModal(true)}><a href="#">Delete</a></li>
            </ul>
        </MovieCardEditList>
    )
};

MovieCardEditDropdown.protoTypes ={
    showDropdown: PropTypes.bool.isRequired
}
