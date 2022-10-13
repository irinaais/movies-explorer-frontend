import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import design from "../../images/33_slova_o_design.svg";
import hundredYears from "../../images/1000_let_design.svg";
import benksi from "../../images/v_pogone_za_benksi.svg";
import baskiya from "../../images/vzriv_realnosti.svg";
import run from "../../images/beg_eto_svoboda.svg";
import booksellers from "../../images/knigotorgovthsi.svg";
import germany from "../../images/kogda_ya_dumayu_o_germanii_nochyu.svg";
const cardLikeButtonClassName = "movies-card__button movies-card__button_like";
const cardDislikeButtonClassName = "movies-card__button movies-card__button_dislike";
const cardDeleteButtonClassName = "movies-card__button movies-card__button_delete";

function MoviesCardList() {
  const pathName = window.location.pathname;

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {pathName === "/saved-movies" ? (
          <ul className="movies-card-list__list">
            <MoviesCard title="33 слова о дизайне" duration="1ч 42м" image={design} button={cardDeleteButtonClassName}/>
            <MoviesCard title="Киноальманах «100 лет дизайна»" duration="1ч 42м" image={hundredYears} button={cardDeleteButtonClassName}/>
            <MoviesCard title="В погоне за Бенкси" duration="1ч 42м" image={benksi} button={cardDeleteButtonClassName}/>
          </ul>
        ) : (
          <>
            <ul className="movies-card-list__list">
              <MoviesCard title="33 слова о дизайне" duration="1ч 42м" image={design} button={cardLikeButtonClassName}/>
              <MoviesCard title="Киноальманах «100 лет дизайна»" duration="1ч 42м" image={hundredYears} button={cardLikeButtonClassName}/>
              <MoviesCard title="В погоне за Бенкси" duration="1ч 42м" image={benksi} button={cardDislikeButtonClassName}/>
              <MoviesCard title="Баския: Взрыв реальности" duration="1ч 42м" image={baskiya} button={cardDislikeButtonClassName}/>
              <MoviesCard title="Бег это свобода" duration="1ч 42м" image={run} button={cardLikeButtonClassName}/>
              <MoviesCard title="Книготорговцы" duration="1ч 42м" image={booksellers} button={cardDislikeButtonClassName}/>
              <MoviesCard title="Когда я думаю о Германии ночью" duration="1ч 42м" image={germany} button={cardDislikeButtonClassName}/>
            </ul>
            <button className="movies-card-list__button" type="button">Ещё</button>
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;