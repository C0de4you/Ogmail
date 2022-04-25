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

export const fetchLetters = createAsyncThunk('letters/fetchLetters',
    async () => {
        const url = "http://localhost:3001/"
        const response = await fetch(url);
        return response.json();
    })

export const fetchNewLetter = createAsyncThunk('letters/fetchNewLetter',
    async data => {
        const url = "http://localhost:3001/"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        })
        return await response.json();
    }
)

export const fetchDelLetter = createAsyncThunk('letters/fetchDelLetter',
    async data => {
        const url = "http://localhost:3001/"
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        })
        return await response.json();
    }
)

export const fetchUpdateLetter = createAsyncThunk('letters/fetchUpdateLetter',
    async data => {
        const url = "http://localhost:3001/"
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
    },
    extraReducers: builder => {
        builder
            .addCase(fetchLetters.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchLetters.fulfilled, (state, action) => {
                lettersAdapter.setAll(state, action.payload)
                state.status = 'fullfield'
            })
            .addCase(fetchLetters.rejected, () => {
                console.log('get letters list error');
            })
            .addCase(fetchNewLetter.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchNewLetter.fulfilled, (state, action) => {
                lettersAdapter.addOne(state, action.payload)
                state.status = 'fullfield'
            })
            .addCase(fetchNewLetter.rejected, () => {
                console.log('Add letter error');
            })
            .addCase(fetchDelLetter.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchDelLetter.fulfilled, (state, action) => {
                state.status = 'fullfield'
                lettersAdapter.removeOne(state, action.payload.id)
            })
            .addCase(fetchDelLetter.rejected, () => {
                console.log('Delete letter error');
            })
            .addCase(fetchUpdateLetter.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchUpdateLetter.fulfilled, (state, action) => {
                state.status = 'fullfield'
                lettersAdapter.setOne(state, action.payload)
            })
            .addCase(fetchUpdateLetter.rejected, () => {
                console.log('Update letter error');
            })
    }
})

const lettersSelectors = lettersAdapter.getSelectors((state) => state.letters);

export const selectLetterById = lettersSelectors.selectById;

export const selectLettersByBox = (state, box) => lettersSelectors.selectAll(state)
    .filter(letter => letter.box === box)
    .sort(sortFunc.bind(null, state.letters.sortBy));

export const { sortLetters } = lettersSlice.actions;

export default lettersSlice.reducer;