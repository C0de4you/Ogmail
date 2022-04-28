import {
    createSlice,
    createAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { LETTER } from '../../app/constants';

const sortFunc = ((value, previous, current) => {
    if (previous[value] > current[value]) return 1;
    else return -1;
})

const lettersAdapter = createEntityAdapter();

const initialState = lettersAdapter.getInitialState({
    status: 'idle',
    sortBy: 'date'
})

export const lettersSlice = createSlice({
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

export const getLettersAction = createAction(LETTER.GET);
export const postLettersAction = createAction(LETTER.POST, (sender, theme, message) => {
    return {
        payload: {
            date: (new Date()).toLocaleString(),
            sender,
            theme,
            message,
            status: 'read',
            box: 'outBox',
        }
    }
});

export const patchLetterAction = createAction(LETTER.PATCH, (id, property, value) => {
    return { payload: { id, property, value } }
});
export const deleteLetterAction = createAction(LETTER.DELETE, (id) => {
    return { payload: { id } }
});

const lettersSelectors = lettersAdapter.getSelectors((state) => state.letters);

export const selectLetterById = lettersSelectors.selectById;

export const selectStatus = state => state.letters.status;

export const selectLettersByBox = (state, box) => lettersSelectors.selectAll(state)
    .filter(letter => letter.box === box)
    .sort(sortFunc.bind(null, state.letters.sortBy));

export const { sortLetters, setLetters, setStatus, addLetter, removeLetter, updateLetter } = lettersSlice.actions;

export default lettersSlice.reducer;