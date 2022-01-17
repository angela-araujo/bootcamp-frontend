import { State } from '../store/store.types';

export const moviesLoaded = (state: State) => state.movies.data;

export const errorMessage = (state: State) => state.movies.error;