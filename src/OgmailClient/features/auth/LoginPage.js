import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    let navigate = useNavigate();

    const [loginInputValue, setLoginInputValue] = React.useState('');
    const [passwordInputValue, setPasswordInputValue] = React.useState('');

    const loginHandler = () => {
        if (loginInputValue === 'admin' && passwordInputValue === 'admin') {
            navigate('/letters/inBox')
        } else {
            alert('Неверный логин или пароль!')
        }
    }

    return (
        <div className="login mainTheme">
            <form className="login-form">
                <p className="login-form__header">Введите логин и пароль</p>
                <label>Логин (admin)</label>
                <input className="login-form__input" type="text" value={loginInputValue} onChange={(event) => {setLoginInputValue(event.target.value)}}></input>
                <label>Пароль (admin)</label>
                <input className="login-form__input" type="text" value={passwordInputValue} onChange={(event) => {setPasswordInputValue(event.target.value)}}></input>
                <button onClick={loginHandler} className="login-form__button">Войти</button>
            </form>
        </div>
    )
}

export default LoginPage;