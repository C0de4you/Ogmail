import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from '../features/auth/reducers';
import mailboxReducer from '../features/mailbox/reducers'

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    letters: mailboxReducer,
    auth: authReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);