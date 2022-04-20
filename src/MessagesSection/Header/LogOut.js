import React from "react";
import { useNavigate } from "react-router-dom";

function LogOut() {

    let navigate = useNavigate();

    return (
        <div onClick={() => navigate("/")} className="header__logout helpTheme">Выйти</div>
    )
}

export default LogOut;