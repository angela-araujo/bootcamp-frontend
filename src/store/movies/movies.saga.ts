import { put, takeEvery, all, call } from 'redux-saga/effects'
import moviesService from '../../services/movies/movies.service';
import { moviesActions } from "./movies.slice";

export function* getData() {
    try {

        const { data } = yield call(moviesService().getMovies);
        yield put(moviesActions.setData(data))
        console.log('get movies data', data);

    } catch (error) {
        // @ts-ignore
        yield put(listMoviesActions.setError(error.response.data.message));
    }
}

function* watchListMovies() {
    yield takeEvery('movies/getData', getData)
}

export default function* userSaga() {
    yield all([
        watchListMovies(),
    ])
}