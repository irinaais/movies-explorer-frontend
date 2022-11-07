import React, {useState} from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import account from "../../images/account.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import PopupBurger from "../PopupBurger/PopupBurger";

function Navigation() {
  const [isPopupBurgerOpen, setIsPopupBurgerOpen] = useState(false);

  function handleBurgerMenuOpenClick() {
    setIsPopupBurgerOpen(true);
  }

  function handleBurgerMenuCloseClick() {
    setIsPopupBurgerOpen(false);
  }

  const setActive = (isActive) =>
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
      <BurgerMenu onClick={ handleBurgerMenuOpenClick }/>
      <PopupBurger isOpen={ isPopupBurgerOpen } isClose={ handleBurgerMenuCloseClick }/>
    </section>
  );
}

export default Navigation;