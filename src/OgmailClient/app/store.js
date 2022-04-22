import { configureStore } from '@reduxjs/toolkit';
import lettersReducer from '../features/letters/lettersSlice'

export default configureStore({
  reducer: {
    letters: lettersReducer
  },
});