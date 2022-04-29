import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectLettersByBox } from "../selectors";

function SideBar() {

    const inBox = useSelector(state => selectLettersByBox(state, 'inBox'));
    const outBox = useSelector(state => selectLettersByBox(state, 'outBox'));
    const delBox = useSelector(state => selectLettersByBox(state, 'delBox'));

    const inBoxQuantity = inBox.length ? inBox.length.toString() : '';
    const outBoxQuantity = outBox.length ? outBox.length.toString() : '';
    const delBoxQuantity = delBox.length ? delBox.length.toString() : '';

    return (
        <div className='sideBar helpTheme'>
            <ul className="sideBar-categories">
                <li>
                    <Link onClick={() => localStorage.selectedBox = "inBox"}
                        to="inBox" className="sideBar-categories__category">Входящие{` ${inBoxQuantity}`}</Link>
                </li>
                <li>
                    <Link onClick={() => localStorage.selectedBox = "outBox"}
                        to="outBox" className="sideBar-categories__category">Исходящие{` ${outBoxQuantity}`}</Link>
                </li>
                <li>
                    <Link onClick={() => localStorage.selectedBox = "delBox"}
                        to="delBox" className="sideBar-categories__category">Удаленные{` ${delBoxQuantity}`}</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;