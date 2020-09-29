import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Formik,  Field, Form } from 'formik';

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

    return ReactDOM.createPortal(
        <MovieModalWindow>
            <Formik
                initialValues={{
                id: state?.id,
                title: state?.title || '',
                release_date: state?.release_date || '',
                poster_path: state?.poster_path || '',
                genres: state?.genres || [],
                overview: state?.overview || '',
                runtime: state?.runtime || ''
            }}
                validate={values => {
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
                }}
                onSubmit={(async (values) => {
                    values.genres = prepareGenres(selected);
                    values.runtime = Number(values.runtime);
                    if (movieId) {
                        try {
                            const data = await dispatch(updateMovie(values));
                            if (!data.error) {
                                history.push('/');
                            }
                        } catch (e) {
                            console.error(error);
                            throw e;
                        }
                    } else {
                        try {
                            const data = await dispatch(addMovie(values));
                            if (!data.error) {
                                history.push('/');
                            }
                        } catch (e) {
                            console.error(error);
                            throw e;
                        }
                    }
                })}
            >
                {({errors, touched, handleReset}) => (
                    <Form onReset={handleReset}>
                        <MovieModalHeader>
                            <Link to={'/'}>
                                <span/>
                            </Link>
                            <h1>{header}</h1>
                        </MovieModalHeader>
                        {showMovieIdRow && <AddEditMovieFormRow>
                            <label htmlFor="movie-id">Movie ID</label>
                            <Field
                                type="text"
                                id="movie-id"
                                name="id"
                            />
                        </AddEditMovieFormRow>}
                        <AddEditMovieFormRow>
                            <label htmlFor="title">Title</label>
                            <Field
                                type="text"
                                placeholder="Title"
                                id="title"
                                name="title"
                            />
                            {errors.title && touched.title ? <Error>{errors.title}</Error> : null}
                        </AddEditMovieFormRow>
                        <AddEditMovieFormRow>
                            <label htmlFor="date">Release date</label>
                            <Field
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
                            />
                            {errors.release_date && touched.release_date ? <Error>{errors.release_date}</Error> : null}
                        </AddEditMovieFormRow>
                        <AddEditMovieFormRow>
                            <label htmlFor="url">Movie URL</label>
                            <Field
                                type="url"
                                placeholder="Movie URL here"
                                id="url"
                                name="poster_path"
                            />
                            {errors.poster_path && touched.poster_path ? <Error>{errors.poster_path}</Error> : null}
                        </AddEditMovieFormRow>
                        <MultiSelectDropdown
                            onChange={setSelected}
                            value={selected}
                        />
                        <AddEditMovieFormRow>
                            <label htmlFor="overview">Overview</label>
                            <Field
                                type="text"
                                placeholder="Overview here"
                                id="overview"
                                name="overview"
                            />
                            {errors.overview && touched.overview ? <Error>{errors.overview}</Error> : null}
                        </AddEditMovieFormRow>
                        <AddEditMovieFormRow>
                            <label htmlFor="runtime">Runtime</label>
                            <Field
                                type="text"
                                placeholder="Runtime here"
                                id="runtime"
                                name="runtime"
                            />
                            {errors.runtime && touched.runtime ? <Error>{errors.runtime}</Error> : null}
                        </AddEditMovieFormRow>
                        <AddEditMovieFormRow>
                            <ResetButton type="reset">Reset</ResetButton>
                            <Button type="submit">{buttonName}</Button>
                        </AddEditMovieFormRow>
                    </Form>
                )}
            </Formik>
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
