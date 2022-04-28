import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import lettersReducer from '../features/letters/lettersSlice'
import rootSaga from './sagas';
import authReducer from '../features/auth/authSlice';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    letters: lettersReducer,
    auth: authReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);