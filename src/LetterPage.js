import React from "react";
import { useNavigate } from "react-router-dom";
import {MailBoxContext} from "./Messages";

function LetterPage() {

    const mailBoxData = React.useContext(MailBoxContext);
    
    const deleteLetter = mailBoxData.deleteLetter;
    const letter = JSON.parse(localStorage.selectedLetter);
    const changeReadStatus = mailBoxData.changeReadStatus;
    const setSelectedLetter = mailBoxData.setSelectedLetter;
    const selectedBox = mailBoxData.selectedBox;
    let navigate = useNavigate()
    
    const closeButtonHandler = () => {
        changeReadStatus();
        setSelectedLetter(null);
        localStorage.removeItem('selectedLetter');
        navigate(`/message/${selectedBox}`);
    }

    const deleteButtonHandler = () => {
        deleteLetter();
        navigate(`/message/${selectedBox}`);
    }

    return (
        <div className='letter-page'>
            <p className="letter__from">От:{` ${letter.sender}`}</p>
            <p className="letter__date">{letter.date}</p>
            <p className="letter__theme">Тема:{` ${letter.theme}`}</p>
            <p className="letter__message__full">{letter.message}</p>
            <button className="letter-page__close" onClick={closeButtonHandler}>Закрыть</button>
            <button className="letter-page__delete" onClick={deleteButtonHandler}>Удалить</button>
        </div>
    )
}

export default LetterPage;