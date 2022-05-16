import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from '../features/auth/reducers';
import mailboxReducer from '../features/mailbox/reducers'
import { reducer as formReducer } from 'redux-form'

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    letters: mailboxReducer,
    auth: authReducer,
    form: formReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);