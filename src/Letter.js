import React from "react";
import {MailBoxContext} from "./Messages";

function Letter(props) {

    const mailBoxData = React.useContext(MailBoxContext);

    const letter = props.letter;
    const setSelectedLetter = mailBoxData.setSelectedLetter;

    const clickHandler = () => {
        setSelectedLetter(letter);
        localStorage.selectedLetter = JSON.stringify(letter);
    }

    return (
            <div className='letter' onClick={clickHandler}>
                <p className="letter__from">От:{` ${letter.sender}`}</p>
                <p className="letter__date">{letter.date}</p>
                <p className="letter__theme">Тема:{` ${letter.theme}`}</p>
                <p className="letter__message">{letter.message}</p>
            </div>
    )
}

export default Letter;