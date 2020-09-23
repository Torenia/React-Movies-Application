import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';
import { getMovieData } from '../../store/movies.reducer';

export default function EditMovieModal(props) {
    const { id } = props.match.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieData(id));
    }, [id]);

    return (
        <AddEditMovieModalForm
            header="Edit Movie"
            showMovieIdRow={true}
            buttonName="Save"
            movieId={id}
        />
    )
};

EditMovieModal.propTypes = {
    match: PropTypes.object.isRequired,
};
