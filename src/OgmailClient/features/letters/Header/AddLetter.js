import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { selectNextId, fetchNewLetter } from '../lettersSlice'

function AddLetter(props) {

    const setIsOpen = props.setIsOpen;
    const dispatch = useDispatch();
    const id = useSelector(selectNextId)

    const [senderInputValue, setSenderInputValue] = React.useState('');
    const [themeInputValue, setThemeInputValue] = React.useState('');
    const [messageInputValue, setMessageInputValue] = React.useState('');

    const [addRequestStatus, setAddRequestStatus] = React.useState('idle');

    const canSave =
        [senderInputValue, themeInputValue, messageInputValue].every(Boolean) && addRequestStatus === 'idle'

    const sendHandler = async () => { 
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                await dispatch(fetchNewLetter(
                    {
                    date: (new Date()).toLocaleString(),
                    sender: senderInputValue,
                    theme: themeInputValue,
                    message: messageInputValue,
                    status: 'read',
                    box: 'outBox',
                    id
                }
                ))
            } catch (err) {
                console.error('Failed to save the letter: ', err)
            } finally {
                setAddRequestStatus('idle')
                setIsOpen(false);
            }
        } else {
            setSenderInputValue('Введите имя');
            setThemeInputValue('Введите тему сообщения');
            setMessageInputValue('Введите текст сообщение');
        }
    }

            return (
                <React.Fragment>
                    <p className="writeLetter-modal__header">Новое письмо</p>
                    <form className="writeLetter-modal-form">
                        <label>Отправитель</label>
                        <input type="text" className="writeLetter-modal-form__senderInput" value={senderInputValue} onChange={(event) => { setSenderInputValue(event.target.value) }}></input>
                        <label>Тема</label>
                        <input type="text" className="writeLetter-modal-form__themeInput" value={themeInputValue} onChange={(event) => { setThemeInputValue(event.target.value) }}></input>
                        <label>Сообщение</label>
                        <textarea className="writeLetter-modal-form__textarea" value={messageInputValue} onChange={(event) => { setMessageInputValue(event.target.value) }}></textarea>
                    </form>
                    <button className="writeLetter-modal-form__close" onClick={() => { setIsOpen(false) }}>Отменить</button>
                    <button className="writeLetter-modal-form__send" onClick={sendHandler}>Отправить</button>
                </React.Fragment>
            )
        }

        export default AddLetter;