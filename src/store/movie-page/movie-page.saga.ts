import { all, call, put, takeEvery } from "redux-saga/effects"
import moviePageService from "../../services/movie-page/movie-page.service";
import { moviePageActions } from "./movie-page.slice";

export function* getMoviePage() {

    const movieId = "61b919fbcc75c3a912274244";

    try {
        console.log('yield');
        const { data } = yield call(moviePageService().getMovie, movieId);
        yield put(moviePageActions.setData(data))
        console.log('buscar data', data);
    } catch (error) {
        // @ts-ignore
        yield put(moviePageActions.setError(error.response.data.message));
    }
}

function* watchMoviePage() {
    yield takeEvery('movie-page/getMoviePage', getMoviePage)
}

export default function* userSaga() {
    yield all([
        watchMoviePage(),
    ])
}