import { createSlice } from "@reduxjs/toolkit";
import { MoviesState } from "./movies.types";
import reducers from "./movies.reducers";

const initialState: MoviesState = {
    data: null,
    error: '',
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers,
})

export const { reducer: moviesReducer, actions: moviesActions } = moviesSlice