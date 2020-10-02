import React, { useCallback, useEffect } from 'react';

import { getMoviesList } from '../store/movies.reducer';
import { useDispatch, useSelector } from 'react-redux';

export function useMoviesData(sortBy, filterBy, searchText, urlSearch) {
    const dispatch = useDispatch();
    const state = useSelector(store=> store);

    const baseUrl = 'http://localhost:4000/movies';

    let url = '';

    if (sortBy) {
        url = `${baseUrl}?sortBy=${sortBy}&&sortOrder=desc`;
    }

    if(filterBy && filterBy !=='All') {
        url = `${baseUrl}?filter=${filterBy}`;
    } else if (filterBy && filterBy ==='All') {
        url = `${baseUrl}?sortBy=${sortBy}&&sortOrder=desc`;
    }

    if (searchText || urlSearch) {
        url = `${baseUrl}?searchBy=title&&search=${searchText || urlSearch}`;
    }

    const fetchMoviesList = useCallback(async () => {
        dispatch(getMoviesList(url));
    }, [dispatch, url]);

    useEffect(() => {
        fetchMoviesList();
    }, [url]);

    return [state];
}



