import { State } from '../store/store.types';

export const moviePage = (state: State) => state.moviePage.data;

export const errorMessage = (state: State) => state.moviePage.error;