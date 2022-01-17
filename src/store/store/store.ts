import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import storeSaga from './store.saga';
import { userReducer } from '../user/user.slice';
import { listMoviesReducer } from '../list-movies/list-movies.slice';
import { moviesReducer } from '../movies/movies.slice';
import { moviePageReducer } from '../movie-page/movie-page.slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { 
        user: userReducer,
        listMovies: listMoviesReducer,
        movies: moviesReducer,
        moviePage: moviePageReducer
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(storeSaga)

export default store