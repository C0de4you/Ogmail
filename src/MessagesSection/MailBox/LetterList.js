import React from "react";
import Letter from "./LetterListElement";
import { useParams } from "react-router-dom";
import { Context } from "../MessagesSection";

function LetterList() {

    const contextValue = React.useContext(Context);
    const dataBase = contextValue.dataBase;

    let letters;

    const params = useParams();

    switch (params.Box) {
        case 'inBox':
            letters = dataBase.inBox;
            break;
        case 'outBox':
            letters = dataBase.outBox;
            break;
        case 'delBox':
            letters = dataBase.delBox;
            break;
        default:
            letters = null;
    }

    return (
        <React.Fragment>
            {letters.map((letter) =>
                <Letter key={letter.id} letter={letter} />)}
        </React.Fragment>
    )
}

export default LetterList;