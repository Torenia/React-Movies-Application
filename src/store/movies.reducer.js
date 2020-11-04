import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
    totalAmount: '',
    data: [],
    movie: {},
    isLoading: false,
    error: null
};

export const getMoviesList = createAsyncThunk(
    'reducers/getMoviesList',
    async (url) => {
        try {
            return await axios.get(url);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

export const addMovie = createAsyncThunk(
    'reducers/addMovie',
    async (movieData) => {
        try {
            return await axios.post('http://localhost:4000/movies', movieData);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

export const deleteMovie = createAsyncThunk(
    'reducers/deleteMovie',
    async (id) => {
        try {
            await axios.delete(`http://localhost:4000/movies/${id}`);
            return id;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

export const updateMovie = createAsyncThunk(
    'reducers/updateMovie',
    async (data) => {
        try {
            return await axios.put('http://localhost:4000/movies', data);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

export const getMovieData = createAsyncThunk(
    'reducers/getMovieData',
    async (id) => {
        try {
            return await axios.get(`http://localhost:4000/movies/${id}`);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

export const moviesSlice = createSlice({
    name: 'reducers/movies.reducer',
    initialState,
    reducers: {},
    extraReducers: {
        [getMoviesList.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMoviesList.fulfilled]: (state, action) => ({
            ...state,
            data: action.payload.data.data,
            totalAmount: action.payload.data.totalAmount,
            isLoading: false
        }),
        [getMoviesList.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        },
        [addMovie.pending]: (state, action) => {
            state.isLoading = true;
        },
        [addMovie.fulfilled]: (state, action) => {
            state.data = [action.payload.data, ...state.data];
            state.totalAmount = state.totalAmount + 1;
            state.isLoading = false;
        },
        [addMovie.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        },
        [deleteMovie.pending]: (state, action) => {
            state.isLoading = true;
        },
        [deleteMovie.fulfilled]: (state, action) => {
            state.data = state.data.filter(item => item.id.toString() !== action.payload);
            state.totalAmount = state.totalAmount - 1;
            state.isLoading = false;
        },
        [deleteMovie.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        },
        [updateMovie.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateMovie.fulfilled]: (state, action) => {
            if (state.movie.id === action.payload.data.id) {
                state.movie = {...action.payload.data}
                state.data = state.data.map((movie) => movie.id === action.payload.data.id ? {...state.movie} : movie);
            }
        },
        [updateMovie.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        },
        [getMovieData.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMovieData.fulfilled]: (state, action) => ({
            ...state,
            movie: action.payload.data,
            isLoading: false
        }),
        [getMovieData.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        },
    }
});

export default moviesSlice.reducer;
