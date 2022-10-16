import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register(props) {
  return (
    <section className="register">
      <div className="register__container">
        <Link className="register__button register__button_logo" to="/">
          <img alt="Логотип" src={ logo } className="register__logo"/>
        </Link>
        <form className="register__form">
          <h2 className="register__title">Добро пожаловать!</h2>
          <fieldset className="register__info">
            <label className="register__label">
              <span className="register__input-text">Имя</span>
              <input className="register__input register__input_name-user" type="text" id="nameUser-input" required
                     minLength="2" maxLength="40" placeholder={props.name} name="nameUser"/>
              <span></span>
            </label>
            <label className="register__label">
              <span className="register__input-text">E-mail</span>
              <input className="register__input register__input_email-user" type="email" id="emailUser-input" required
                     minLength="2" maxLength="40" placeholder={props.email} name="emailUser"/>
              <span></span>
            </label>
            <label className="register__label">
              <span className="register__input-text">Пароль</span>
              <input className="register__input register__input_password-user" type="password" id="passwordUser-input" required
                     minLength="8" maxLength="40" placeholder={props.password} name="passwordUser"/>
              <span></span>
            </label>
          </fieldset>
          <button className="register__button register__button_signin">Зарегистрироваться</button>
          <h3 className="register__text-register">Уже зарегистрированы?
            <Link className="register__button register__button_text-register" to="/signin">Войти</Link>
          </h3>
        </form>
      </div>
    </section>
  );
}

export default Register;