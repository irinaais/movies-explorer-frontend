import React, { useRef, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register(props) {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
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

  function handleChangeName(evt) {
    setName(evt.target.value);
    if (evt.target.validity.valid) {
      setNameError("");
    } else {
      setNameError("Минимум - 2 символа, максимум - 40");
    }
    validationForm();
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

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(name, email, password);
    setName("")
    setEmail("");
    setPassword("");
  }

  return (
    <main className="register">
      <div className="register__container">
        <form ref={ formRef } className="register__form" noValidate onSubmit={ handleSubmit }>
          <Link className="register__button register__button_logo" to="/">
            <img alt="Логотип" src={ logo } className="register__logo"/>
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
          <fieldset className="register__info">
            <div className="register__input-container">
              <label className="register__label">Имя</label>
              <input
                className="register__input register__input_name-user"
                type="text"
                id="nameUser-input"
                required
                minLength="2"
                maxLength="40"
                name="nameUser"
                value={name || ""}
                onChange={handleChangeName}
              />
              <span className="register__input-error nameUser-input-error">{ nameError }</span>
            </div>
            <div className="register__input-container">
              <label className="register__label">E-mail</label>
              <input
                className="register__input register__input_email-user"
                type="email" id="emailUser-input"
                required
                minLength="2"
                maxLength="40"
                name="emailUser"
                value={email || ""}
                onChange={handleChangeEmail}
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
              />
              <span className="register__input-error emailUser-input-error">{ emailError }</span>
            </div>
            <div className="register__input-container">
              <label className="register__label">Пароль</label>
              <input
                className="register__input register__input_password-user"
                type="password"
                id="passwordUser-input"
                required
                minLength="8"
                maxLength="40"
                name="passwordUser"
                value={password || ""}
                onChange={handleChangePassword}
              />
              <span className="register__input-error passwordUser-input-error">{ passwordError }</span>
            </div>
          </fieldset>
          <button
            className="register__button register__button_signin"
            type="submit"
            aria-label="Зарегистрироваться"
            disabled={ isDisabled }>
            Зарегистрироваться
          </button>
          <h3 className="register__text-register">Уже зарегистрированы?
            <Link className="register__button register__button_text-register" to="/signin">Войти</Link>
          </h3>
        </form>
      </div>
    </main>
  );
}

export default Register;