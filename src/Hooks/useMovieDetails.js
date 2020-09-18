import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { setMovieDetailsData } from '../store/movies.reducer';

export const useMovieDetails = (id) => {
    const dispatch = useDispatch();
    const state = useSelector(store => store.movie);
    const url = `http://localhost:4000/movies/${id}`;

    const fetchMovieDetails = useCallback(async () => {
        try {
            await axios.get(url).then(res => {
                dispatch(setMovieDetailsData(res.data));
            });
        } catch (e) {
            console.error(e);
        }
    }, [id]);

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    return [state];
}



