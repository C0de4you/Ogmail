import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { selectLetterById } from '../lettersSlice'
import { LETTER } from "../../../app/constants";

function LetterPage() {

    const navigate = useNavigate();
    const params = useParams();
    const id = Number(params.id);
    const selectedBox = localStorage.selectedBox;
    const dispatch = useDispatch();
    const letter = useSelector((state) => selectLetterById(state, id));

    const [addRequestStatus, setAddRequestStatus] = React.useState('idle');

    const closeButtonHandler = () => {
        if (addRequestStatus === 'idle') {
            try {
                setAddRequestStatus('pending')
                dispatch({ type: LETTER.PATCH, payload: { id, property: 'status', value: 'read' }})
            } catch (err) {
                console.error('Failed to update the letter: ', err)
            } finally {
                setAddRequestStatus('idle')
                navigate(`/mailbox/${selectedBox}`);
            }
        }
    }

    const deleteLetterFromDelBox = () => {
        if (addRequestStatus === 'idle') {
            try {
                dispatch({ type: LETTER.DELETE, payload: {id} });
            } catch (err) {
                console.error('Failed to delete the letter: ', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const moveLetterToDelBox = () => {
        if (addRequestStatus === 'idle') {
            try {
                setAddRequestStatus('pending')
                dispatch({ type: LETTER.PATCH, payload: { id, property: 'box', value: 'delBox' }})
            } catch (err) {
                console.error('Failed to update the letter: ', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const deleteButtonHandler = () => {
        if (selectedBox === 'delBox') {
            deleteLetterFromDelBox();
        } else {
            moveLetterToDelBox();
        }
        navigate(`/mailbox/${selectedBox}`);
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