import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import account from "../../images/account.svg";

function Navigation() {
  const setActive = ({ isActive }) =>
    isActive ? "navigation__link navigation__link_active" : "navigation__link";

  return (
    <section className="navigation">
      <div className="navigation__links">
        <NavLink to="/movies" className={ setActive }>Фильмы</NavLink>
        <NavLink to="/saved-movies" className={ setActive }>Сохранённые фильмы</NavLink>
      </div>
      <NavLink to="/profile" className="navigation__profile">Аккаунт
        <img className="navigation__profile-image" src={account} alt="Кнопка Аккаунт"/>
      </NavLink>
    </section>
  );
}

export default Navigation;