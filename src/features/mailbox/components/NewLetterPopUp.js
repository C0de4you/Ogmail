import React from "react";
import LetterReduxForm from "./LetterForm";

function NewLetterPopUp(props) {

    return (
        <React.Fragment>
            <p className="writeLetter-modal__header">Новое письмо</p>
            <LetterReduxForm setIsOpen={props.setIsOpen} />
            <button className="writeLetter-modal-form__close" onClick={() => { props.setIsOpen(false) }}>Отменить</button>
        </React.Fragment>
    )
}

export default NewLetterPopUp;