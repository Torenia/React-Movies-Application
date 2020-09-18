import React from 'react';
import PropTypes from 'prop-types';

import AddEditMovieModalForm from '../AddEditMovieModalForm/AddEditMovieModalForm';
import { useMovieDetails } from '../../Hooks/useMovieDetails';

export default function EditMovieModal(props) {
    const { id } = props.match.params;
    const [state] = useMovieDetails(id);

    const options = [
        { label: 'Adventure', value: 'Adventure' },
        { label: 'Music', value: 'Music' },
    ];

    return (
        <AddEditMovieModalForm
            options={options}
            header="Edit Movie"
            showMovieIdRow={true}
            buttonName="Save"
            movie={state}
            movieId={id}
        />
    )
};

EditMovieModal.propTypes = {
    match: PropTypes.object.isRequired,
};
