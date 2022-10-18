import React, { useRef, useState } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  function validationForm() {
    const formTag = formRef.current;
    if (formTag.checkValidity()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    if (evt.target.validity.valid) {
      setEmailError("");
    } else {
      setEmailError("Введён некорректный e-mail");
    }
    validationForm();
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    if (evt.target.validity.valid) {
      setPasswordError("");
    } else {
      setPasswordError("Минимум - 8 символов, максимум - 30");
    }
    validationForm();
  }

  return (
    <main className="login">
      <div className="login__container">
        <form ref={ formRef } className="login__form" noValidate>
          <Link className="login__button login__button_logo" to="/">
            <img alt="Логотип" src={ logo } className="login__logo"/>
          </Link>
          <h2 className="login__title">Рады видеть!</h2>
          <fieldset className="login__info">
            <div className="login__input-container">
              <label className="login__label">E-mail</label>
              <input
                className="login__input login__input_email-user"
                type="email"
                id="emailUser-input"
                required
                minLength="2"
                maxLength="40"
                name="emailUser"
                value={email || ""}
                onChange={handleChangeEmail}
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
              />
              <span className="login__input-error emailUser-input-error">{emailError}</span>
            </div>
            <div className="login__input-container">
              <label className="login__label">Пароль</label>
              <input
                className="login__input login__input_password-user"
                type="password"
                id="passwordUser-input"
                required
                minLength="8"
                maxLength="30"
                name="passwordUser"
                value={password || ""}
                onChange={handleChangePassword}
              />
              <span className="login__input-error passwordUser-input-error">{passwordError}</span>
            </div>
          </fieldset>
          <button className="login__button login__button_signin" type="submit" aria-label="Авторизоваться" disabled={ isDisabled }>Войти</button>
          <h3 className="login__text-register">Ещё не зарегистрированы?
            <Link className="login__button login__button_text-register" to="/signup">Регистрация</Link>
          </h3>
        </form>
      </div>
    </main>
  );
}

export default Login;