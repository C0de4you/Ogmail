import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import lettersReducer from '../features/letters/lettersSlice'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    letters: lettersReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);