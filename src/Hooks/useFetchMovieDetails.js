import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchMovieDetails = (id) => {
    const [movieData, setMovieData] = useState({});
    const url = `http://localhost:4000/movies/${id}`;

    const fetchMovieDetails = useCallback(async () => {
        try {
            const response = await axios.get(url);
            const {
                data
            } = response;

            setMovieData({...data});
        } catch (e) {
            console.error(e);
        }
    }, [url]);

    useEffect(() => {
        fetchMovieDetails();
    }, [url]);

    return [movieData];
}



