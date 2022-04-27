import { all, call, put, takeEvery } from 'redux-saga/effects';
import { setLetters, setStatus, addLetter, removeLetter, updateLetter } from '../features/letters/lettersSlice'
import { LETTER } from './constants'

const url = "http://localhost:3001/"

const getLetters = async () => {
    const response = await fetch(url);
    return response.json();
}

const postLetter = async data => {
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

const patchLetter = async data => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
    })
    return response.json();
}

const deleteLetter = async data => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
    })
    return response.json();
}

function* fetchGetLetters() {
    try {
        yield put(setStatus('pending'));
        const letters = yield call(getLetters);
        yield put(setLetters(letters));
        yield put(setStatus('fullfield'));
    } catch (e) {
        yield put(setStatus('rejected'));
        console.log(e);
    }
}

function* fetchPostLetter(action) {
    try {
        const letter = yield call(postLetter, action.payload);
        yield put(addLetter(letter));
    } catch (e) {
        console.log(e);
    }
}

function* fetchPatchLetter(action) {
        try {
            const letter = yield call(patchLetter, action.payload);
            yield put(updateLetter({ id: letter.id, changes: letter }));
        } catch (e) {
            console.log(e);
        }
    }

function* fetchDeleteLetter(action) {
        try {
            const letter = yield call(deleteLetter, action.payload);
            yield put(removeLetter(letter.id));
        } catch (e) {
            console.log(e);
        }
    }

function* watchGetLetters() {
    yield takeEvery(LETTER.GET, fetchGetLetters);
}

function* watchPostLetters() {
    yield takeEvery(LETTER.POST, fetchPostLetter);
}

function* watchPatchLetters() {
    yield takeEvery(LETTER.PATCH, fetchPatchLetter);
}

function* watchDeleteLetters() {
    yield takeEvery(LETTER.DELETE, fetchDeleteLetter);
}

export default function* rootSaga() {
    yield all([
        watchGetLetters(),
        watchPostLetters(),
        watchPatchLetters(),
        watchDeleteLetters(),
    ])
}