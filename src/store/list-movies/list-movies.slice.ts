import { createSlice } from "@reduxjs/toolkit";
import { ListMoviesState } from "./list-movies.types";
import reducers from "./list-movies.reducers";

const initialState: ListMoviesState = {
    data: null,
    error: '',
}

const listMoviesSlice = createSlice({
    name: 'list-movies',
    initialState,
    reducers,
})

export const { reducer: listMoviesReducer, actions: listMoviesActions } = listMoviesSlice