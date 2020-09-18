import React, { useCallback, useEffect } from 'react';
import axios from 'axios';

import { setMoviesData } from '../store/movies.reducer';
import { useDispatch, useSelector } from 'react-redux';

export function useMoviesData(sortBy, filterBy, searchText) {
    const dispatch = useDispatch();
    const state = useSelector(store=> store);

    const baseUrl = 'http://localhost:4000/movies';

    let url = `${baseUrl}?sortBy=${sortBy}&&sortOrder=desc`;

    if (sortBy) {
        url = `${baseUrl}?sortBy=${sortBy}&&sortOrder=desc`;
    }

    if(filterBy && filterBy !=='All') {
        url = `${baseUrl}?filter=${filterBy}`;
    } else if (filterBy && filterBy ==='All') {
        url = `${baseUrl}?sortBy=${sortBy}&&sortOrder=desc`;
    }

    if (searchText) {
        url = `${baseUrl}?searchBy=title&&search=${searchText}`;
    }

    const fetchMoviesList = useCallback(async () => {
        try {
            const response = await axios.get(url);

            dispatch(setMoviesData(response.data));
        } catch (e) {
            console.error(e);
        }
    }, [dispatch, url]);

    useEffect(() => {
        fetchMoviesList();
    }, [url]);

    return [state];
}



