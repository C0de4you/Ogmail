import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../actions";
import { userSelector, loginHintSelector } from '../selectors'
import { Field, reduxForm } from 'redux-form'
import { SubmissionError } from "redux-form";

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

const LoginForm = (props) => {

    const { handleSubmit } = props;

    const loginHint = useSelector(loginHintSelector);
    const mainHintElem = <p className="login-form__header">Введите логин и пароль</p>
    const loginHintElem = <p className="login-form__loginHint">{loginHint}</p>
    const header = loginHint ? loginHintElem : mainHintElem

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    React.useEffect(() => {
        if (user) {
            localStorage.setItem('login', user);
            navigate('/mailbox/inBox')
        }
    }, [user, navigate])

    const login = values => {

        const { login, password } = values;

        if (!login || !password) {
            throw new SubmissionError({
                login: '(admin@ogmail.com)',
                password: '(admin)'
            })
        } else {
            dispatch(setLogin(login, password))
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit(login)} >
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
            <button type="submit" className="login-form__button">Войти</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

function LoginPage() {

    return (
        <div className="login mainTheme">
            <LoginReduxForm />
        </div>
    )
}

export default LoginPage;