import React from "react";
import "./Promo.css";
import planet from "../../images/big_logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__button" href="#" target="_blank">Узнать больше</a>
        </div>
        <img alt="Логотип планеты" src={ planet } className="promo__image"/>
      </div>
    </section>
  );
}

export default Promo;