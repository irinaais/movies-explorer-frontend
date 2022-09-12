import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header header_theme_light">
      <div className="header__container">
        <img alt="Логотип" src={ logo } className="header__logo"/>
        <div className="header__button_container">
          <a className="header__button header__button_signup" href="/signup">Регистрация</a>
          <a className="header__button header__button_signin" href="/signin">Войти</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
