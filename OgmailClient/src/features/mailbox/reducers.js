import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const lettersAdapter = createEntityAdapter();

const initialState = lettersAdapter.getInitialState({
    status: 'idle',
    sortBy: 'date'
});

const lettersSlice = createSlice({
    name: 'letters',
    initialState,
    reducers: {
        sortLetters(state, action) { state.sortBy = action.payload },
        setStatus(state, action) { state.status = action.payload },
        setLetters: lettersAdapter.setAll,
        addLetter: lettersAdapter.addOne,
        removeLetter: lettersAdapter.removeOne,
        updateLetter: lettersAdapter.updateOne,
    },
})

export { lettersSlice, lettersAdapter };

export default lettersSlice.reducer;