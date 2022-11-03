import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const pathName = window.location.pathname

  const hours = Math.trunc(props.duration/60);
  const minutes = Math.trunc(props.duration - hours * 60);

  const cardLikeButtonClassName = "movies-card__button movies-card__button_like";
  const cardDislikeButtonClassName = "movies-card__button movies-card__button_dislike";
  const cardDeleteButtonClassName = "movies-card__button movies-card__button_delete";

  return (
    <li className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{props.title}</h3>
          <p className="movies-card__duration">{hours} ч {minutes} мин</p>
        </div>
        {pathName === "/saved-movies" ? (
          <button
            className={cardDeleteButtonClassName}
            aria-label="Кнопка удаления фильма"
            type="button"
            onClick={() => props.deleteMovie()}
          />
        ) : (
          <button
            className={props.button ? cardLikeButtonClassName : cardDislikeButtonClassName}
            aria-label="Кнопка сохранения или удаления фильма"
            type="button"
            onClick={() => props.onLikeClick(props.button)}
          />
        )}
      </div>
      <img className="movies-card__image" alt={props.title} src={props.image}/>
    </li>
  );
}

export default MoviesCard;