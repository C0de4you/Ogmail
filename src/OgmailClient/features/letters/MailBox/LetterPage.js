import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { deleteLetter, readLetter, selectLetterById } from '../lettersSlice'

function LetterPage() {

    const navigate = useNavigate();
    const params = useParams();
    const id = Number(params.id);
    const selectedBox = localStorage.selectedBox;
    const dispatch = useDispatch();
    const letter = useSelector((state) => selectLetterById(state, id));

    const closeButtonHandler = () => {
        dispatch(readLetter({ id }))
        navigate(`/letters/${selectedBox}`);
    }

    const deleteButtonHandler = () => {
        dispatch(deleteLetter({ box: selectedBox, id }))
        navigate(`/letters/${selectedBox}`);
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