import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../actions";
import { userSelector, loginHintSelector } from '../selectors'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {}
    if (!values.login) {
        errors.login = '(admin)'
    }
    if (!values.password) {
        errors.password = '(admin)'
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

const LoginForm = (props) => {

    const loginHint = useSelector(loginHintSelector);
    const mainHintElem = <p className="login-form__header">Введите логин и пароль</p>
    const loginHintElem = <p className="login-form__loginHint">{loginHint}</p>
    const header = loginHint ? loginHintElem : mainHintElem

    return (
        <form className="login-form">
            {header}
            <Field 
            component={renderInput}
            name='login'
            className="login-form__input" 
            type="email"
            label='Логин' />
            <Field
            component={renderInput}
            name="password"
            className="login-form__input" 
            type="password" 
            label='Пароль' />
            <button onClick={props.handleSubmit} className="login-form__button">Войти</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'loginForm', validate })(LoginForm)

function LoginPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    React.useEffect(() => {
        if (user) {
            localStorage.setItem('login', user);
            navigate('/mailbox/inBox')
        }
    }, [user, navigate])

    const handlLogin = async values => {
       
        const { login, password } = values

        dispatch(setLogin(login, password))
    }

    return (
        <div className="login mainTheme">
            <LoginReduxForm onSubmit={handlLogin} />
        </div>
    )
}

export default LoginPage;