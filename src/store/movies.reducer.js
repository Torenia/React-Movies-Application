import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    totalAmount: '',
    data: [],
    movie: {}
};

export const moviesSlice = createSlice({
    name: 'reducers/movies.reducer',
    initialState,
    reducers: {
        setMoviesData: (state, action) => ({
            ...state,
            data: action.payload.data,
            totalAmount: action.payload.totalAmount,
        }),
        createMovie: (state, action) => {
            state.data = [action.payload, ...state.data];
            state.totalAmount = state.totalAmount + 1;
        },
        editMovie: (state, action) => {
            if (state.movie.id === action.payload.id) {
                state.movie.title = action.payload.title;
                state.movie.release_date = action.payload.release_date;
                state.movie.poster_path = action.payload.poster_path;
                state.movie.overview = action.payload.overview;
                state.movie.runtime = action.payload.runtime;
                state.data = state.data.map((movie)=> movie.id === action.payload.id ? {...state.movie} : movie);
            }
        },
        deleteMovie: (state, action) => {
            state.data = state.data.filter(item => item.id.toString() !== action.payload);
            state.totalAmount = state.totalAmount - 1;
        },
        setMovieDetailsData: (state, action) => ({
            ...state,
            movie: action.payload,
        }),
        clearMovieDetailsData: (state, action) => ({
            ...state,
            movie: action.payload,
        }),
    },
});

export const {
    setMoviesData,
    deleteMovie,
    setMovieDetailsData,
    editMovie,
    clearMovieDetailsData,
    createMovie
} = moviesSlice.actions;

export default moviesSlice.reducer;
