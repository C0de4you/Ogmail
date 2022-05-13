import { createAction } from '@reduxjs/toolkit';
import { authSlice } from './reducers';
import { AUTH } from './types';

const setLogin = createAction(AUTH.LOGIN, (login, password) => {
    return { payload: { login, password}};
});

const { setUser, setLoginHint } = authSlice.actions;

export {
    setLogin,
    setUser,
    setLoginHint,
};