import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { MovieModalWindow } from '../MovieModalWindow/MovieModalWindow';
import { AddEditMovieFormRow } from '../AddEditMovieFormRow/AddEditMovieFormRow';
import { MovieModalHeader } from '../MovieModalHeader/MovieModalHeader';
import { Button, ResetButton } from '../Button/Button';
import MultiSelectDropdown from '../MultiSelectDropdown/MultiSelectDropdown';
import { updateMovie } from '../../utils/updateMovie';
import { editMovie, clearMovieDetailsData, createMovie } from '../../store/movies.reducer';

const AddEditMovieModalForm = ({ options, header, showMovieIdRow, buttonName, movieId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(store => store.movie);
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [release_date, setRelease_date] = useState('');
    const [poster_path, setPoster_path] = useState('');
    const [genres, setGenres] = useState(options);
    const [overview, setOverview] = useState('');
    const [runtime, setRuntime] = useState('');

    const movieDetails = {
        id,
        title,
        release_date,
        poster_path,
        genres,
        overview,
        runtime: runtime ? Number(runtime) : runtime
    }
    useEffect(() => {
        setId(state.id);
        setTitle(state.title);
        setRelease_date(state.release_date);
        setPoster_path(state.poster_path);
        setOverview(state.overview);
        setRuntime(state.runtime);
    }, [state]);

    useEffect(() => {
        dispatch(editMovie(movieDetails));
    }, [movieDetails]);

    const handleUpdateMovie = (() => {
        if(movieId) {
            updateMovie(state);
        } else {
            try {
                axios.post('http://localhost:4000/movies', state).then(res => dispatch(createMovie(res.data)));
            } catch (e) {
                console.error(e);
            }
        }
        dispatch(clearMovieDetailsData({}));
        history.push('/');
    });

    return ReactDOM.createPortal(
        <MovieModalWindow>
            <form>
                <MovieModalHeader>
                    <Link to={'/'} onClick={()=>dispatch(clearMovieDetailsData({}))}>
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
                        defaultValue={id}
                        onChange={e => setId(e.target.value)}
                    />
                </AddEditMovieFormRow>}
                <AddEditMovieFormRow>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        placeholder="Title"
                        id="title"
                        name="title"
                        defaultValue={title}
                        onChange={e => setTitle(e.target.value)}
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
                        defaultValue={release_date}
                        onChange={e => setRelease_date(e.target.value)}
                    />
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <label htmlFor="url">Movie URL</label>
                    <input
                        type="url"
                        placeholder="Movie URL here"
                        id="url"
                        name="poster_path"
                        defaultValue={poster_path}
                        onChange={e => setPoster_path(e.target.value)}
                    />
                </AddEditMovieFormRow>
                <MultiSelectDropdown options={options} selectedOptions={state ? state.genres : options}/>
                <AddEditMovieFormRow>
                    <label htmlFor="overview">Overview</label>
                    <input
                        type="text"
                        placeholder="Overview here"
                        id="overview"
                        name="overview"
                        defaultValue={overview}
                        onChange={e => setOverview(e.target.value)}
                    />
                </AddEditMovieFormRow>
                <AddEditMovieFormRow>
                    <label htmlFor="runtime">Runtime</label>
                    <input
                        type="text"
                        placeholder="Runtime here"
                        id="runtime"
                        name="runtime"
                        defaultValue={runtime}
                        onChange={e => setRuntime(e.target.value)}
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
    header: PropTypes.string,
    showMovieIdRow: PropTypes.bool,
    buttonName: PropTypes.string,
    movieId: PropTypes.string
};

export default AddEditMovieModalForm;
