import { State } from '../store/store.types';

export const listMoviesLoaded = (state: State) => state.listMovies.data;

export const errorMessage = (state: State) => state.listMovies.error;