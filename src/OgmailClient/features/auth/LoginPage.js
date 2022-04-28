import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, loginHintSelector, userSelector } from "./authSlice";

function LoginPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const loginHint = useSelector(loginHintSelector);

    const [loginInputValue, setLoginInputValue] = React.useState('');
    const [passwordInputValue, setPasswordInputValue] = React.useState('');

    React.useEffect(() => {
        if (user) {
            localStorage.setItem('login', user);
            navigate('/mailbox/inBox')
        }
    }, [user, navigate])

    const loginHandler = (event) => {
        const login = loginInputValue;
        const password = passwordInputValue;
        event.preventDefault();
        dispatch(loginAction(login, password))
        setLoginInputValue('');
        setPasswordInputValue('');
    }

    return (
        <div className="login mainTheme">
            <form className="login-form">
                <p className="login-form__header">Введите логин и пароль</p>
                <label>Логин (admin) <p className="login-form__loginHint">{loginHint}</p></label>
                <input className="login-form__input" type="text" value={loginInputValue} onChange={(event) => { setLoginInputValue(event.target.value) }}></input>
                <label>Пароль (admin)</label>
                <input className="login-form__input" type="text" value={passwordInputValue} onChange={(event) => { setPasswordInputValue(event.target.value) }}></input>
                <button onClick={loginHandler} className="login-form__button">Войти</button>
            </form>
        </div>
    )
}

export default LoginPage;