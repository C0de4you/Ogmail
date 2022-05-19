import React from "react";

function LetterListElement(props) {

    const letter = props.letter;

    return (
        <div className={`letter ${letter.status}`}>
            <p className="letter__from">От:{` ${letter.sender}`}</p>
            <p className="letter__date">{letter.date}</p>
            <p className="letter__subject">Тема:{` ${letter.subject}`}</p>
            <p className="letter__message">{letter.message}</p>
        </div>
    )
}

export default LetterListElement;