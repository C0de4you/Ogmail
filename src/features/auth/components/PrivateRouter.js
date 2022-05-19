import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userSelector } from '../selectors';

function PrivateRoute(props) {
    const user = useSelector(userSelector);
    return user ? props.children : <Navigate to='/login' />
}

export {
    PrivateRoute,
};