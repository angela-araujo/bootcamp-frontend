import { put, takeEvery, all, call } from 'redux-saga/effects'
import listMoviesService from '../../services/list-movies/list-movies.service';
import { AccessTokenStorageKey } from '../user/user.types';
import { listMoviesActions } from "./list-movies.slice";

export function* buscar() {
    try {
        const accessToken = localStorage.getItem(AccessTokenStorageKey)

        if (accessToken) {
            const { data }  = yield call(listMoviesService().getLisMovies, accessToken);
            yield put(listMoviesActions.setData(data))
            console.log('buscar data', data);
        }

    } catch (error) {
        // @ts-ignore
        yield put(listMoviesActions.setError(error.response.data.message));
    }
}

function* watchListMovies() {
    yield takeEvery('list-movies/buscar', buscar)
}

export default function* userSaga() {
    yield all([
        watchListMovies(),
    ])
}