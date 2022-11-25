import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const hours = Math.trunc(props.duration/60);
  const minutes = Math.trunc(props.duration - hours * 60);

  return (
    <li className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{props.title}</h3>
          <p className="movies-card__duration">{hours} ч {minutes} мин</p>
        </div>
        <button
          className={props.button}
          aria-label="Кнопка удаления фильма"
          type="button"
          onClick={props.clickOnTheButton}
          />
      </div>
      <div className="movies-card__tooltip-container">
        <a className="movies-card__link" href={props.movie.trailerLink} target="_blank" rel="noreferrer">
          <img className="movies-card__image" alt={props.title} src={props.image}/>
        </a>
        <div className="movies-card__tooltip">{props.movie.description}</div>
      </div>
    </li>
  );
}

export default MoviesCard;