import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className={`header ${props.theme}`}>
      <div className="header__container">
        <a className="header__button header__button_logo" href="/">
          <img alt="Логотип" src={ logo } className="header__logo"/>
        </a>
        {props.loggedIn ? (
          <Navigation openSavedMovies={props.openSavedMovies}/>
        ):(
          <div className="header__button_container">
            <a className="header__button header__button_signup" href="/signup">Регистрация</a>
            <a className="header__button header__button_signin" href="/signin">Войти</a>
          </div>
          )}
      </div>
    </header>
  );
}

export default Header;
