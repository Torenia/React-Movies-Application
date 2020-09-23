import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import { MovieModalWindow } from '../MovieModalWindow/MovieModalWindow';
import { AddEditMovieFormRow } from '../AddEditMovieFormRow/AddEditMovieFormRow';
import { MovieModalHeader } from '../MovieModalHeader/MovieModalHeader';
import { Button, ResetButton } from '../Button/Button';
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown';
import { updateMovie, addMovie } from '../../store/movies.reducer';

const AddEditMovieModalForm = ({ options, genres, header, showMovieIdRow, buttonName, movieId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(store => store.data.find(item => item.id.toString() === movieId));
    const error = useSelector(store => store.error);

    const [movieData, setMovieData] = useState({
        id: state?.id,
        title: state?.title || '',
        release_date: state?.release_date || '',
        poster_path: state?.poster_path || '',
        genres: state?.genres || genres,
        overview: state?.overview || '',
        runtime: state?.runtime || '',
    });

    const handleOnChange = e => {
        e.target.name === 'runtime'
            ? setMovieData({
                ...movieData,
                [e.target.name]: Number(e.target.value)
            }) :
            setMovieData({
                ...movieData,
                [e.target.name]: e.target.value
            });
    };

    const handleUpdateMovie = ((e) => {
        if(movieId) {
            dispatch(updateMovie(movieData));
        } else {
            dispatch(addMovie(movieData));
        }
        if (!error) {
            history.push('/');
        } else {
            e.preventDefault();
            console.error(error);
        }
    });

    return ReactDOM.createPortal(
        <MovieModalWindow>
            <form>
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
                        defaultValue={movieData.id}
                        onChange={handleOnChange}
                    />
                </AddEditMovieFormRow>}
                <AddEditMovieFormRow>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        placeholder="Title"
                        id="title"
                        name="title"
                        defaultValue={movieData.title}
                        onChange={handleOnChange}
                    />
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
                        defaultValue={movieData.release_date}
                        onChange={handleOnChange}
                    />
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <label htmlFor="url">Movie URL</label>
                    <input
                        type="url"
                        placeholder="Movie URL here"
                        id="url"
                        name="poster_path"
                        defaultValue={movieData.poster_path}
                        onChange={handleOnChange}
                    />
                </AddEditMovieFormRow>
                <MultiSelectDropdown options={options} selectedOptions={movieData.genres}/>
                <AddEditMovieFormRow>
                    <label htmlFor="overview">Overview</label>
                    <input
                        type="text"
                        placeholder="Overview here"
                        id="overview"
                        name="overview"
                        defaultValue={movieData.overview}
                        onChange={handleOnChange}
                    />
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <label htmlFor="runtime">Runtime</label>
                    <input
                        type="text"
                        placeholder="Runtime here"
                        id="runtime"
                        name="runtime"
                        defaultValue={movieData.runtime}
                        onChange={handleOnChange}
                    />
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <ResetButton>Reset</ResetButton>
                    <Button type="submit" onClick={handleUpdateMovie}>{buttonName}</Button>
                </AddEditMovieFormRow>
            </form>
        </MovieModalWindow>, document.getElementById('modal-root')
    )
}

AddEditMovieModalForm.propTypes = {
    options: PropTypes.array,
    genres: PropTypes.array,
    header: PropTypes.string,
    showMovieIdRow: PropTypes.bool,
    buttonName: PropTypes.string,
    movieId: PropTypes.string
};

export default AddEditMovieModalForm;
