import { createSlice } from "@reduxjs/toolkit";
import { MoviePageState } from "./movie-page.types";
import reducers from "./movie-page.reducer";

const initialState: MoviePageState = {
    data: null,
    error: '',
}

const moviePageSlice = createSlice({
    name: 'movie-page',
    initialState,
    reducers,
})

export const { reducer: moviePageReducer, actions: moviePageActions } = moviePageSlice