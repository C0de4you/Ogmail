import React from "react";
import { Field, reduxForm } from 'redux-form';

function FindSenderField(props) {

    const { handleChange } = props;

    return (
        <form className="findSenderForm" onChange={handleChange} onSubmit={e => e.preventDefault()}>
            <Field
                component='input'
                name="sender"
                type="text"
                className="findSenderForm__input"
                placeholder="Отправитель" />
        </form>
    )
}

const FindSenderReduxField = reduxForm({ form: 'findSenderForm', initialValues: { sender: '' } })(FindSenderField);

export default FindSenderReduxField;