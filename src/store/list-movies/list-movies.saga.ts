import { put, takeEvery, all, call } from 'redux-saga/effects'
import listMoviesService from '../../services/list-movies/list-movies.service';
import { GetListMovies } from '../../services/list-movies/list-movies.types';
import { AccessTokenStorageKey } from '../user/user.types';
import { listMoviesActions } from "./list-movies.slice";

export function* buscar() {
    try {        

        const { data: { listMovies: listMovies} }: GetListMovies = yield call(listMoviesService().getLisMovies);
            
        yield put(listMoviesActions.setData(listMovies))
        
        console.log('buscar data');

    } catch (error) {
        // @ts-ignore
        console.log(error); // @ts-ignore
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