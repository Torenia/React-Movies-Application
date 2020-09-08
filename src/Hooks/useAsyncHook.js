import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export function useAsyncHook(sortBy, filterBy, searchText, resultCount) {
    const initMoviesListData = {
        totalAmount: '',
        data: []
    };

    const [moviesData, setMoviesData] = useState(initMoviesListData);

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
            const {
                totalAmount,
                data
            } = response.data;

            setMoviesData({
                totalAmount,
                data
            });
            resultCount(totalAmount);
        } catch (e) {
            console.error(e);
        }
    }, [url]);

    useEffect(() => {
        fetchMoviesList();
    }, [url]);

    return [moviesData];
}



