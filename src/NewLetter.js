import React from "react";
import { HeaderContext } from "./Messages";

function NewLetter(props) {

    const headerData = React.useContext(HeaderContext);

    const setIsOpen = props.setIsOpen;
    const addLetter = headerData.addLetter;

    const [senderInputValue, setSenderInputValue] = React.useState('Отправитель');
    const [themeInputValue, setThemeInputValue] = React.useState('Тема');
    const [messageInputValue, setMessageInputValue] = React.useState('Введите текст сообщения');

    const sendHandler = () => {
        addLetter({
            sender: senderInputValue,
            date: (new Date()).toLocaleString(),
            theme: themeInputValue,
            message: messageInputValue,
        }
        )
        setIsOpen(false);
    }

    return (
        <React.Fragment>
            <p className="writeMessage-modal__header">Новое письмо</p>
            <form className="writeMessage-modal-form">
                <label>Отправитель</label>
                <input type="text" className="writeMessage-modal-form__senderInput" value={senderInputValue} onChange={(event) => {setSenderInputValue(event.target.value)}}></input>
                <label>Тема</label>
                <input type="text" className="writeMessage-modal-form__themeInput" value={themeInputValue} onChange={(event) => {setThemeInputValue(event.target.value)}}></input>
                <label>Сообщение</label>
                <textarea className="writeMessage-modal-form__textarea" value={messageInputValue} onChange={(event) => {setMessageInputValue(event.target.value)}}></textarea>
            </form>
            <button className="writeMessage-modal-form__close" onClick={() => { setIsOpen(false) }}>Отменить</button>
            <button className="writeMessage-modal-form__send" onClick={sendHandler}>Отправить</button>
        </React.Fragment>
    )
}

export default NewLetter;