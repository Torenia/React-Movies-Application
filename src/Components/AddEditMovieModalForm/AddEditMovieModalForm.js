import React from 'react';
import PropTypes from 'prop-types';

import { MovieModalWindow } from '../MovieModalWindow/MovieModalWindow';
import { AddEditMovieFormRow } from '../AddEditMovieFormRow/AddEditMovieFormRow';
import { MovieModalHeader } from '../MovieModalHeader/MovieModalHeader';
import { Button, ResetButton } from '../Button/Button';
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown';

export default function AddEditMovieModalForm({ options, header, showMovieIdRow, buttonName, isShownMovieModal }) {

    return (
        <MovieModalWindow>
                <form>
                    <MovieModalHeader>
                        <span onClick={() => isShownMovieModal(false)}/>
                        <h1>{header}</h1>
                    </MovieModalHeader>
                    {showMovieIdRow && <AddEditMovieFormRow>
                        <label htmlFor="movie-id">Movie ID</label>
                        <input
                            type="text"
                            id="movie-id"
                        />
                    </AddEditMovieFormRow>}
                    <AddEditMovieFormRow>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            placeholder="Title"
                            id="title"
                        />
                    </AddEditMovieFormRow>
                    <AddEditMovieFormRow>
                        <label htmlFor="date">Release date</label>
                        <input
                            type="text"
                            placeholder="Select date"
                            id="date"
                            onFocus={(e) => {e.currentTarget.type ='date'}}
                            onBlur={(e) => {e.currentTarget.type ='text'}}
                        />
                    </AddEditMovieFormRow>
                    <AddEditMovieFormRow>
                        <label htmlFor="url">Movie URL</label>
                        <input
                            type="url"
                            placeholder="Movie URL here"
                            id="url"
                        />
                    </AddEditMovieFormRow>
                    <MultiSelectDropdown options={options}/>
                    <AddEditMovieFormRow>
                        <label htmlFor="overview">Overview</label>
                        <input
                            type="text"
                            placeholder="Overview here"
                            id="overview"
                        />
                    </AddEditMovieFormRow>
                    <AddEditMovieFormRow>
                        <label htmlFor="runtime">Runtime</label>
                        <input
                            type="text"
                            placeholder="Runtime here"
                            id="runtime"
                        />
                    </AddEditMovieFormRow>
                    <AddEditMovieFormRow>
                        <ResetButton>Reset</ResetButton>
                        <Button type="submit">{buttonName}</Button>
                    </AddEditMovieFormRow>
                </form>
        </MovieModalWindow>
    )
};

AddEditMovieModalForm.propTypes = {
    options: PropTypes.array,
    header: PropTypes.string,
    showMovieIdRow: PropTypes.bool,
    buttonName: PropTypes.string,
    isShownMovieModal: PropTypes.func
};

