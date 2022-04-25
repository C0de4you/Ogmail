import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { selectLetterById, fetchDelLetter, fetchUpdateLetter } from '../lettersSlice'

function LetterPage() {

    const navigate = useNavigate();
    const params = useParams();
    const id = Number(params.id);
    const selectedBox = localStorage.selectedBox;
    const dispatch = useDispatch();
    const letter = useSelector((state) => selectLetterById(state, id));

    const [addRequestStatus, setAddRequestStatus] = React.useState('idle');

    const closeButtonHandler = async () => {
        if (addRequestStatus === 'idle') {
            try {
                setAddRequestStatus('pending')
                await dispatch(fetchUpdateLetter({ id, property: 'status', value: 'read' }))
            } catch (err) {
                console.error('Failed to update the letter: ', err)
            } finally {
                navigate(`/letters/${selectedBox}`);
            }
        }
    }

    const deleteLetterFromDelBox = async () => {
        if (addRequestStatus === 'idle') {
            try {
                setAddRequestStatus('pending')
                await dispatch(fetchDelLetter({ id }))
            } catch (err) {
                console.error('Failed to delete the letter: ', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const moveLetterToDelBox = async () => {
        if (addRequestStatus === 'idle') {
            try {
                setAddRequestStatus('pending')
                await dispatch(fetchUpdateLetter({ id, property: 'box', value: 'delBox' }))
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