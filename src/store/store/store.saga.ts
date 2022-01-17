import { all } from 'redux-saga/effects';
import userSaga from '../user/user.saga';
import listMoviesSaga from '../list-movies/list-movies.saga';
import moviesSaga from '../movies/movies.saga';
import moviePageSaga from '../movie-page/movie-page.saga';

export default function* storeSaga() {
    yield all([
        userSaga(), 
        listMoviesSaga(), 
        moviesSaga(),
        moviePageSaga()
    ]);
}