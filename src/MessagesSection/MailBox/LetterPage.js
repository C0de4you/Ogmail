import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../MessagesSection";

function LetterPage() {

    const contextValue = React.useContext(Context);
    const dataBase = contextValue.dataBase

    const navigate = useNavigate();
    const params = useParams();
    const selectedBox = localStorage.selectedBox;

    const letter = dataBase[selectedBox].find(item => item.id.toString() === params.id);
    const index = dataBase[selectedBox].indexOf(letter);

    const closeButtonHandler = () => {
        navigate(`/messages/${selectedBox}`);
        letter.status = 'read';
    }

    const deleteButtonHandler = () => {
        if (selectedBox === 'delBox') {
            dataBase.delBox.splice(index, 1);
            contextValue.setState([]);
            navigate(`/messages/${selectedBox}`);
        } else {
            dataBase[selectedBox].splice(index, 1);
            dataBase.delBox.push(letter);
            letter.status = 'read';
            contextValue.setState([]);
            navigate(`/messages/${selectedBox}`);
        }
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