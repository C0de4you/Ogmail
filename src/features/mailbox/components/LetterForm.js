import React from 'react';
import { useDispatch } from 'react-redux'
import { postLetterOnServer } from "../actions";
import { Field, reduxForm, SubmissionError } from 'redux-form'

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
            ((error && <span className='form__error'>{error}</span>))}
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
            ((error && <span className='form__error'>{error}</span>))}
        <div>
            <textarea {...input} placeholder={label} className={className} />
        </div>
    </div>
)

const LetterForm = (props) => {

    const { handleSubmit, submitting } = props

    const dispatch = useDispatch();

    const [addRequestStatus, setAddRequestStatus] = React.useState('idle');

    const submit = values => {

        const { sender, subject, message } = values;

        if (!sender || !subject || !message) {
            throw new SubmissionError({
                sender: '(Все поля должны быть заполнены)',
                subject: '(Все поля должны быть заполнены)',
                message: '(Все поля должны быть заполнены)',
            })
        } else {
            if (addRequestStatus === 'idle') {
                try {
                    setAddRequestStatus('pending')
                    dispatch(postLetterOnServer(sender, subject, message));
                } catch (err) {
                    console.error('Failed to add the letter: ', err);
                } finally {
                    setAddRequestStatus('idle')
                }
                props.setIsOpen(false);
            }
        }
    }

    return (
        <form className="writeLetter-modal-form" onSubmit={handleSubmit(submit)}>
            <Field
                component={renderInput}
                name="sender"
                type="text"
                className="writeLetter-modal-form__senderInput"
                placeholder="Отправитель"
                label='Отправитель' />
            <Field
                component={renderInput}
                name="subject"
                type="text"
                className="writeLetter-modal-form__themeInput"
                placeholder="Тема сообщения"
                label='Тема' />
            <Field
                component={renderTextArea}
                name="message"
                className="writeLetter-modal-form__textarea"
                label='Сообщение' />
            <button type="submit" className="writeLetter-modal-form__send" disabled={submitting}>Отправить</button>
        </form>
    )
}

const LetterReduxForm = reduxForm({ form: 'letterForm' })(LetterForm);

export default LetterReduxForm;