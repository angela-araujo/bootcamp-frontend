import { put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { userActions } from './user.slice';

export function* login(props: any) {
    yield put(userActions.setData(props.payload))
}

function* whatchLogin() {
    yield takeEvery('user/login', login)
    // yield takeLatest('user/login', login)
}

export default function* userSaga() {
    yield all([
        whatchLogin(),
    ])
}