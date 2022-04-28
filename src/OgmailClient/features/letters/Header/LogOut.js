import React from "react";
import { setLoginHint, setUser } from '../../auth/authSlice';
import { useDispatch } from 'react-redux'

function LogOut() {

    const dispatch = useDispatch();

    const logOut = () => {
        localStorage.clear()
        dispatch(setLoginHint(''));
        dispatch(setUser(null));
    }

    return (
        <div onClick={logOut} className="header__logout helpTheme">Выйти</div>
    )
}

export default LogOut;