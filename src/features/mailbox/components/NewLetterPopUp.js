import React from "react";
import { useDispatch } from 'react-redux'
import { postLetterOnServer } from "../actions";
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {}
    if (!values.sender) {
        errors.sender = '(Необходимо)'
    }
    if (!values.theme) {
        errors.theme = '(Необходимо)'
    }
    if (!values.message) {
        errors.message = '(Необходимо)'
    }
    return errors
}

const renderInput = ({
    input,
    label,
    type,
    meta: { touched, error },
    className
}) => (
    <div>
        <label>{`${label} `}</label>
        {touched &&
            ((error && <span>{error}</span>))}
        <div>
            <input {...input} placeholder={label} type={type} className={className} />
        </div>
    </div>
)

const renderTextArea = ({
    input,
    label,
    meta: { touched, error },
    className
}) => (
    <div>
        <label>{`${label} `}</label>
        {touched &&
            ((error && <span>{error}</span>))}
        <div>
            <textarea {...input} placeholder={label} className={className} />
        </div>
    </div>
)

const LetterForm = (props) => {
    return (
        <form className="writeLetter-modal-form" onSubmit={props.handleSubmit}>
            <Field
                component={renderInput}
                name="sender"
                type="text"
                className="writeLetter-modal-form__senderInput"
                placeholder="Отправитель"
                label='Отправитель' />
            <Field
                component={renderInput}
                name="theme"
                type="text"
                className="writeLetter-modal-form__themeInput"
                placeholder="Тема сообщения"
                label='Тема' />
            <Field
                component={renderTextArea}
                name="message"
                className="writeLetter-modal-form__textarea"
                label='Сообщение' />
            <button type="submit" className="writeLetter-modal-form__send">Отправить</button>
        </form>
    )
}

const LetterReduxForm = reduxForm({ form: 'letterForm' })(LetterForm)

function NewLetterPopUp(props) {

    const dispatch = useDispatch();

    const [addRequestStatus, setAddRequestStatus] = React.useState('idle');

    const handleSubmit = async values => {

        const { sender, theme, message } = values;

        if (addRequestStatus === 'idle') {
            try {
                setAddRequestStatus('pending')
                dispatch(postLetterOnServer(sender, theme, message));
            } catch (err) {
                console.error('Failed to add the letter: ', err);
            } finally {
                setAddRequestStatus('idle')
            }
            props.setIsOpen(false);
        }
    }

    return (
        <React.Fragment>
            <p className="writeLetter-modal__header">Новое письмо</p>
            <LetterReduxForm onSubmit={handleSubmit} />
            <button className="writeLetter-modal-form__close" onClick={() => { props.setIsOpen(false) }}>Отменить</button>
        </React.Fragment>
    )
}

export default reduxForm({ form: 'letterForm', validate })(NewLetterPopUp)