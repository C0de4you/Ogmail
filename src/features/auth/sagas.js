import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { setUser, setLoginHint } from './actions';
import { AUTH } from './types';

const url = `${process.env.REACT_APP_API_URI}/login`;

const login = async data => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
    })
    return response.json();
}

function* fetchLogin(action) {
    try {
        const response = yield call(login, action.payload);
        if (response.user) {
            yield put(setUser(response.user))
        } else {
            yield put(setLoginHint('Неверный логин или пароль'))
        }
    } catch (e) {
        console.log(e)
    }
}

function* watchLogin() {
    yield takeLatest(AUTH.LOGIN, fetchLogin)
}

function* authSaga() {
    yield fork(watchLogin);
}

export default authSaga;