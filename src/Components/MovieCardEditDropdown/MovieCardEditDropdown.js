import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { MovieCardEditList } from '../MovieCardEditList/MovieCardEditList';
import EditMovieModal from '../EditMovieModal/EditMovieModal';
import DeleteMovieModal from '../DeleteMovieModal/DeleteMovieModal';
import { useModal } from '../../Hooks/useModal';

export default function MovieCardEditDropdown({ showDropdown }) {
    const [isShownDeleteMovieModal, setIsShownDeleteMovieModal] = useState(false);
    const {isShowing, toggle} = useModal();

    return (
        <MovieCardEditList>
            <button onClick={() => showDropdown(false)}/>
            <EditMovieModal
                isShowing={isShowing}
                toggle={toggle}
            />
            {isShownDeleteMovieModal &&
            <DeleteMovieModal
                isShownMovieModal={setIsShownDeleteMovieModal}
            />}
            <ul>
                <li onClick={toggle}><a href="#">Edit</a></li>
                <li onClick={() => setIsShownDeleteMovieModal(true)}><a href="#">Delete</a></li>
            </ul>
        </MovieCardEditList>
    )
};

MovieCardEditDropdown.protoTypes ={
    showDropdown: PropTypes.bool.isRequired
}
