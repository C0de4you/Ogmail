import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = { user: null, loginHint: '' };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {state.user = action.payload},
        setLoginHint(state, action) {state.loginHint = action.payload},
    }
})

export const loginAction = createAction('auth/login', (login, password) => {
    return { payload: { login, password}};
});

export const userSelector = state => state.auth.user || localStorage.getItem('login');
export const loginHintSelector = state => state.auth.loginHint;

export const { setUser, setLoginHint } = authSlice.actions;
export default authSlice.reducer;