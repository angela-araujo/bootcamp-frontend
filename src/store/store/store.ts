import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../user/user.slice';
import { listMoviesReducer } from '../list-movies/list-movies.slice';
import createSagaMiddleware from 'redux-saga';
import userSaga from '../user/user.saga';
import listMoviesSaga from '../list-movies/list-movies.saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: { 
        user: userReducer,
        listMovies: listMoviesReducer 
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(userSaga)
sagaMiddleware.run(listMoviesSaga)

export default store