import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userSelector } from '../auth/authSlice';

function PrivateRoute(props) {
    const user = useSelector(userSelector);
    return user ? props.children : <Navigate to='/' />
}

export default PrivateRoute;