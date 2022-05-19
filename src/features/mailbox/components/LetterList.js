import React from "react";
import LetterListElement from "./LetterListElement";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { selectLettersByBox } from "../selectors"
import { getFormValues } from "redux-form";

function LetterList() {

    const params = useParams();
    const box = params.Box;

    let sender;
    let findSenderFormValues = useSelector(getFormValues('findSenderForm'));
    if (findSenderFormValues) {
        sender = findSenderFormValues.sender;
    }

    const letters = useSelector(state => selectLettersByBox(state, box, sender));

    let renderedLetters;

    if (letters.length) {
        renderedLetters = letters.map(letter => (
            <li className="letter__li" key={letter.id}>
                <Link className="letterLink" to={`/mailbox/letter/${letter.id}`}>
                    <LetterListElement letter={letter} />
                </Link>
            </li>
        ))
    } else {
        renderedLetters = <li className="emptyMailBox"><p className="emptyMailBox__text">Пусто</p></li>
    }

    return (
        <ul className="letter_ul">{renderedLetters}</ul>
    )
}

export default LetterList;