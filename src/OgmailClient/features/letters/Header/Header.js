import React from "react";
import SortLetters from "./SortLetters";
import LogOut from "./LogOut";
import AddLetterButton from "./AddLetterButton";

function Header() {

    return (
        <div className='header mainTheme'>
            <p className="header__logo">OGmail</p>
            <LogOut />
            <AddLetterButton />
            <SortLetters />
        </div>
    )
}

export default Header;