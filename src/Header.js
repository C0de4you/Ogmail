import React from "react";
import WriteMessage from "./WriteMessage";
import SortLetters from "./SortLetters";
import LogOut from "./LogOut";

function Header() {

    return (
        <div className='header mainTheme'>
            <p className="header__logo">OGmail</p>
            <LogOut />
            <WriteMessage />
            <SortLetters />
        </div>
    )
}

export default Header;