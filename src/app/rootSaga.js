import { all } from 'redux-saga/effects';
import { authSaga } from '../features/auth/index';
import { mailBoxSaga } from '../features/mailbox/index';

function* rootSaga() {
    yield all([
        authSaga(),
        mailBoxSaga(),
    ])
}

export default rootSaga;