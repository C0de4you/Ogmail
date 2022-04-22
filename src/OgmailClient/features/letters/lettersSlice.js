import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter
} from '@reduxjs/toolkit';

const sortFunc = ((value, previous, current) => {
    if (previous[value] > current[value]) return 1;
    else return -1;
})

const lettersAdapter = createEntityAdapter();

const initialState = lettersAdapter.getInitialState({
    mailBox: [],
    maxId: 0,
    status: 'idle'
})

export const fetchLetters = createAsyncThunk('letters/fetchLetters',
    async () => {
        const url = "http://localhost:3001/"
        const response = await fetch(url);
        return response.json();
    })

export const lettersSlice = createSlice({
    name: 'letters',
    initialState,
    reducers: {
        addLetter(state, action) {
            const letter = action.payload;
            letter.id = state.maxId;
            state.mailBox.push(letter);
            state.maxId++;
        },
        sortLetters(state, action) {
            state.mailBox.sort(sortFunc.bind(null, action.payload))
        },
        deleteLetter(state, action) {
            if (action.payload.box === 'delBox') {
                const letter = state.mailBox.find((letter) => letter.id === action.payload.id);
                const index = state.mailBox.indexOf(letter);
                state.mailBox.splice(index, 1);
            } else {
                const letter = state.mailBox.find((letter) => letter.id === action.payload.id);
                const index = state.mailBox.indexOf(letter);
                state.mailBox[index].box = 'delBox';
            }
        },
        readLetter(state, action) {
            const letter = state.mailBox.find((letter) => letter.id === action.payload.id);
            const index = state.mailBox.indexOf(letter);
            state.mailBox[index].status = 'read';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchLetters.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchLetters.fulfilled, (state, action) => {
                state.mailBox = action.payload;
                state.maxId = action.payload.length;
                state.status = 'fullfield'
            })
            .addCase(fetchLetters.rejected, () => {
                console.log('http error');
            })
    }
})

export const selectLetterById = (state, id) => state.letters.mailBox.find(letter => letter.id === id);
export const selectLettersByBox = (state, box) => state.letters.mailBox.filter(letter => letter.box === box);

export const { addLetter, sortLetters, deleteLetter, readLetter } = lettersSlice.actions;

export default lettersSlice.reducer;