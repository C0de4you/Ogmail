import React from "react";
import { useDispatch } from 'react-redux'
import { AUTH } from '../index'
import { logOut } from '../actions'

function LogOutButton() {

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(logOut())} className="header__logout helpTheme">Выйти</div>
    )
}

export default LogOutButton;