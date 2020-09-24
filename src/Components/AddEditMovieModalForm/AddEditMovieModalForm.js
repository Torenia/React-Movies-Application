import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import { MovieModalWindow } from '../MovieModalWindow/MovieModalWindow';
import { AddEditMovieFormRow } from '../AddEditMovieFormRow/AddEditMovieFormRow';
import { MovieModalHeader } from '../MovieModalHeader/MovieModalHeader';
import { Button, ResetButton } from '../Button/Button';
import { Error } from '../Error/Error';
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown';
import { updateMovie, addMovie } from '../../store/movies.reducer';

const prepareGenres = (value = []) => value.map(genre => genre.value);

const prepareOptions = (value = []) =>
    value.map(genre => ({
        label: genre,
        value: genre,
    }));

const AddEditMovieModalForm = ({ header, showMovieIdRow, buttonName, movieId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(store => store.data.find(item => item.id.toString() === movieId));
    const error = useSelector(store => store.error);
    const [selected, setSelected] = useState(prepareOptions(state?.genres));

    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Required';
        }
        if (!values.release_date) {
            errors.release_date = 'Required';
        }
        if (!values.poster_path) {
            errors.poster_path = 'Required';
        }
        if (!values.overview) {
            errors.overview = 'Required';
        }
        if (!values.runtime) {
            errors.runtime = 'Required';
        } else if (!/^[0-9]+$/i.test(values.runtime)) {
            errors.runtime = 'Runtime must be a number';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            id: state?.id,
            title: state?.title || '',
            release_date: state?.release_date || '',
            poster_path: state?.poster_path || '',
            genres: state?.genres || [],
            overview: state?.overview || '',
            runtime: state?.runtime || ''
        },
        validate,
        onSubmit: ((values, actions) => {
            formik.values.genres = prepareGenres(selected);
            formik.values.runtime = Number(formik.values.runtime);
            if (movieId) {
                dispatch(updateMovie(values));
            } else {
                dispatch(addMovie(values));
            }
            if (!error) {
                history.push('/');
            } else {
                console.error(error);
            }
        })
    })

    return ReactDOM.createPortal(
        <MovieModalWindow>
            <form onSubmit={formik.handleSubmit}>
                <MovieModalHeader>
                    <Link to={'/'}>
                        <span/>
                    </Link>
                    <h1>{header}</h1>
                </MovieModalHeader>
                {showMovieIdRow && <AddEditMovieFormRow>
                    <label htmlFor="movie-id">Movie ID</label>
                    <input
                        type="text"
                        id="movie-id"
                        name="id"
                        defaultValue={formik.values.id}
                        onChange={formik.handleChange}
                    />
                </AddEditMovieFormRow>}
                <AddEditMovieFormRow>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        placeholder="Title"
                        id="title"
                        name="title"
                        defaultValue={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.title ? <Error>{formik.errors.title}</Error> : null}
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <label htmlFor="date">Release date</label>
                    <input
                        type="text"
                        placeholder="Select date"
                        id="date"
                        onFocus={(e) => {
                            e.currentTarget.type = 'date'
                        }}
                        onBlur={(e) => {
                            e.currentTarget.type = 'text'
                        }}
                        name="release_date"
                        defaultValue={formik.values.release_date}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.release_date ? <Error>{formik.errors.release_date}</Error> : null}
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <label htmlFor="url">Movie URL</label>
                    <input
                        type="url"
                        placeholder="Movie URL here"
                        id="url"
                        name="poster_path"
                        defaultValue={formik.values.poster_path}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.poster_path ? <Error>{formik.errors.poster_path}</Error> : null}
                </AddEditMovieFormRow>
                <MultiSelectDropdown
                    selectedOptions={formik.values.genres}
                    onChange={setSelected}
                    value={selected}
                />
                <AddEditMovieFormRow>
                    <label htmlFor="overview">Overview</label>
                    <input
                        type="text"
                        placeholder="Overview here"
                        id="overview"
                        name="overview"
                        defaultValue={formik.values.overview}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.overview ? <Error>{formik.errors.overview}</Error> : null}
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <label htmlFor="runtime">Runtime</label>
                    <input
                        type="text"
                        placeholder="Runtime here"
                        id="runtime"
                        name="runtime"
                        defaultValue={formik.values.runtime}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.runtime ? <Error>{formik.errors.runtime}</Error> : null}
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <ResetButton>Reset</ResetButton>
                    <Button type="submit">{buttonName}</Button>
                </AddEditMovieFormRow>
            </form>
        </MovieModalWindow>, document.getElementById('modal-root')
    )
}

AddEditMovieModalForm.propTypes = {
    header: PropTypes.string,
    showMovieIdRow: PropTypes.bool,
    buttonName: PropTypes.string,
    movieId: PropTypes.string
};

export default AddEditMovieModalForm;
