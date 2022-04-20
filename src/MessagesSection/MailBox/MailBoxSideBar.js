import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../MessagesSection";

function SideBar() {

    const contextValue = React.useContext(Context);
    const dataBase = contextValue.dataBase;

    const inBoxQuantity = dataBase.inBox.length ? dataBase.inBox.length.toString() : '';
    const outBoxQuantity = dataBase.outBox.length ? dataBase.outBox.length.toString() : '';
    const delBoxQuantity = dataBase.delBox.length ? dataBase.delBox.length.toString() : '';

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