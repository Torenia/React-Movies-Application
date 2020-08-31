import React, { useCallback, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { MoviesResultsWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import MovieCard from '../../Components/MovieCard/MovieCard';
import  EmptyResultState from '../../Components/EmptyResultState/EmptyResultState';
import { Context } from '../../Components/Context/Context';

export default function MoviesResults({ searchText, resultCount }) {
    const initMoviesListData = {
        totalAmount: '',
        data: []
    };

    const [moviesData, setMoviesData] = useState(initMoviesListData);
    const sortBy = useContext(Context).sortBy;
    const filterBy = useContext(Context).filterBy;

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

    return (
        <MoviesResultsWrapper>
            {moviesData.totalAmount > 0
                ? moviesData.data.map(movie => (
                    <MovieCard
                        alt={movie.title}
                        srcImg={movie.poster_path}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        genres={movie.genres}
                        key={movie.id}
                        src='../../Assets/movie.jpg'
                    />
                ))
                : <EmptyResultState/>}
        </MoviesResultsWrapper>
    )
};

MoviesResults.protoTypes ={
    searchText: PropTypes.string,
    resultCount: PropTypes.number
}


