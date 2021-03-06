import { call, takeLatest, put } from "redux-saga/effects";
import { LETTER } from "./types";
import { setStatus, setLetters, addLetter, updateLetter, removeLetter } from "./actions";

const url = `${process.env.REACT_APP_API_URI}/mailbox`;

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

function* mailBoxSaga() {
    yield takeLatest(LETTER.GET, fetchGetLetters);
    yield takeLatest(LETTER.POST, fetchPostLetter);
    yield takeLatest(LETTER.PATCH, fetchPatchLetter);
    yield takeLatest(LETTER.DELETE, fetchDeleteLetter);
}

export default mailBoxSaga;