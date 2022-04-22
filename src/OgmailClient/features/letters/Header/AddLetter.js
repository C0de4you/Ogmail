import React from "react";
import { useDispatch } from 'react-redux'
import { addLetter } from '../lettersSlice'

function AddLetter(props) {

    const setIsOpen = props.setIsOpen;
    const dispatch = useDispatch();

    const [senderInputValue, setSenderInputValue] = React.useState('Отправитель');
    const [themeInputValue, setThemeInputValue] = React.useState('Тема');
    const [messageInputValue, setMessageInputValue] = React.useState('Введите текст сообщения');

    const sendHandler = () => {
        dispatch(
            addLetter({
                date: (new Date()).toLocaleString(),
                sender: senderInputValue,
                theme: themeInputValue,
                message: messageInputValue,
                status: 'read',
                box: 'outBox',
            })
        )
        setIsOpen(false);
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