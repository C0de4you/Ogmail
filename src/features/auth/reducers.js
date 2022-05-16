import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null, loginHint: null };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {state.user = action.payload},
        setLoginHint(state, action) {state.loginHint = action.payload},
    }
})

export { authSlice };

export default authSlice.reducer;