import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
    if (evt.target.validity.valid) {
      setNameError("");
    } else {
      setNameError("Минимум - 2 символа, максимум - 40");
    }
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    if (evt.target.validity.valid) {
      setEmailError("");
    } else {
      setEmailError("Введён некорректный e-mail");
    }
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    if (evt.target.validity.valid) {
      setPasswordError("");
    } else {
      setPasswordError("Минимум - 8 символов, максимум - 30");
    }
  }

  return (
    <section className="register">
      <div className="register__container">
        <Link className="register__button register__button_logo" to="/">
          <img alt="Логотип" src={ logo } className="register__logo"/>
        </Link>
        <form className="register__form">
          <h2 className="register__title">Добро пожаловать!</h2>
          <fieldset className="register__info">
            <div className="register__input-container">
              <label className="register__label">Имя</label>
              <input className="register__input register__input_name-user" type="text" id="nameUser-input" required
                     minLength="2" maxLength="40" name="nameUser" value={name || ""} onChange={handleChangeName}/>
              <span className="register__input-error nameUser-input-error">{nameError}</span>
            </div>
            <div className="register__input-container">
              <label className="register__label">E-mail</label>
              <input className="register__input register__input_email-user" type="email" id="emailUser-input" required
                     minLength="2" maxLength="40" name="emailUser" value={email || ""} onChange={handleChangeEmail}/>
              <span className="register__input-error emailUser-input-error">{emailError}</span>
            </div>
            <div className="register__input-container">
              <label className="register__label">Пароль</label>
              <input className="register__input register__input_password-user" type="password" id="passwordUser-input" required
                     minLength="8" maxLength="40" name="passwordUser" value={password || ""} onChange={handleChangePassword}/>
              <span className="register__input-error passwordUser-input-error">{passwordError}</span>
            </div>
          </fieldset>
          <button className="register__button register__button_signin" type="submit">Зарегистрироваться</button>
          <h3 className="register__text-register">Уже зарегистрированы?
            <Link className="register__button register__button_text-register" to="/signin">Войти</Link>
          </h3>
        </form>
      </div>
    </section>
  );
}

export default Register;