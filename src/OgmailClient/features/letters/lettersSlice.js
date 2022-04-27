import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';

const sortFunc = ((value, previous, current) => {
    if (previous[value] > current[value]) return 1;
    else return -1;
})

const lettersAdapter = createEntityAdapter();

const initialState = lettersAdapter.getInitialState({
    status: 'idle',
    sortBy: 'date'
})

const url = "http://localhost:3001/"

export const fetchUpdateLetter = createAsyncThunk('letters/fetchUpdateLetter',
    async data => {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        })
        return await response.json();
    }
)

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

const lettersSelectors = lettersAdapter.getSelectors((state) => state.letters);

export const selectLetterById = lettersSelectors.selectById;

export const selectStatus = state => state.letters.status;

export const selectLettersByBox = (state, box) => lettersSelectors.selectAll(state)
    .filter(letter => letter.box === box)
    .sort(sortFunc.bind(null, state.letters.sortBy));

export const { sortLetters, setLetters, setStatus, addLetter, removeLetter, updateLetter } = lettersSlice.actions;

export default lettersSlice.reducer;