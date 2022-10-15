import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <section className="login">
      <div className="login__container">
        <Link className="login__button login__button_logo" to="/">
          <img alt="Логотип" src={ logo } className="login__logo"/>
        </Link>
        <form className="login__form">
          <h2 className="login__title">Рады видеть!</h2>
          <fieldset className="login__info">
            <label className="login__label">
              <span className="login__input-text">E-mail</span>
              <input className="login__input login__input_email-user" type="email" id="emailUser-input" required
                     minLength="2" maxLength="40" placeholder={props.email} name="emailUser" value={props.email || ""}/>
              <span></span>
            </label>
            <label className="login__label">
              <span className="login__input-text">Пароль</span>
              <input className="login__input login__input_password-user" type="email" id="emailUser-input" required
                     minLength="8" maxLength="40" placeholder={props.password} name="passwordUser" value={props.password || ""}/>
              <span></span>
            </label>
          </fieldset>
          <button className="login__button login__button_signin">Войти</button>
          <h3 className="login__text-register">Ещё не зарегистрированы?
            <Link className="login__button login__button_text-register" to="/signup">Регистрация</Link>
          </h3>
        </form>
      </div>
    </section>
  );
}

export default Login;