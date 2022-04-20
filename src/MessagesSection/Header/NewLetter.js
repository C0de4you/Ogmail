import React from "react";
import { Context } from "../MessagesSection"

function NewLetter(props) {

    const setIsOpen = props.setIsOpen;
    const contextValue = React.useContext(Context);
    const dataBase = contextValue.dataBase;

    const [senderInputValue, setSenderInputValue] = React.useState('Отправитель');
    const [themeInputValue, setThemeInputValue] = React.useState('Тема');
    const [messageInputValue, setMessageInputValue] = React.useState('Введите текст сообщения');

    const sendHandler = () => {
        dataBase.outBox = [...dataBase.outBox, 
            {
            sender: senderInputValue,
            date: (new Date()).toLocaleString(),
            theme: themeInputValue,
            message: messageInputValue,
            status: 'read',
            id: dataBase.quantity,
        }]
        dataBase.quantity++;
        setIsOpen(false);
        contextValue.setState([]);
    }

    return (
        <React.Fragment>
            <p className="writeMessage-modal__header">Новое письмо</p>
            <form className="writeMessage-modal-form">
                <label>Отправитель</label>
                <input type="text" className="writeMessage-modal-form__senderInput" value={senderInputValue} onChange={(event) => { setSenderInputValue(event.target.value) }}></input>
                <label>Тема</label>
                <input type="text" className="writeMessage-modal-form__themeInput" value={themeInputValue} onChange={(event) => { setThemeInputValue(event.target.value) }}></input>
                <label>Сообщение</label>
                <textarea className="writeMessage-modal-form__textarea" value={messageInputValue} onChange={(event) => { setMessageInputValue(event.target.value) }}></textarea>
            </form>
            <button className="writeMessage-modal-form__close" onClick={() => { setIsOpen(false) }}>Отменить</button>
            <button className="writeMessage-modal-form__send" onClick={sendHandler}>Отправить</button>
        </React.Fragment>
    )
}

export default NewLetter;