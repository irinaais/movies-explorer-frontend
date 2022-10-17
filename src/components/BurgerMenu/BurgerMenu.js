import React from "react";
import "./BurgerMenu.css";

function BurgerMenu(props) {
  return (
    <section className="burger-menu">
      <button className="burger-menu__button" type="button" onClick={ props.onClick } aria-label="Открыть меню"/>
    </section>
  );
}

export default BurgerMenu;