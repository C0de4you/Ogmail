import { call, put, takeLatest } from 'redux-saga/effects';
import { setUser, setLoginHint } from './actions';
import { AUTH } from './types';

const url = `${process.env.REACT_APP_API_URI}/login`;

const fetchLogin = async data => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unauthorized');
    }
}

function* logOut() {
    yield localStorage.clear()
    yield put(setLoginHint(''));
    yield put(setUser(null));
}

function* logIn(action) {
    try {
        let user = localStorage.getItem('login');
        if (!user) {
            const response = yield call(fetchLogin, action.payload);
            user = response.user;
        }
        yield put(setUser(user));
    } catch (error) {
        console.error(error);
        yield put(setLoginHint('Неверный логин или пароль'));
    }
}

function* authSaga() {
    yield takeLatest(AUTH.LOGIN, logIn)
    yield takeLatest(AUTH.LOGOUT, logOut)
}

export default authSaga;