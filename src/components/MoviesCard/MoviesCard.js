import React, {useState} from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }

  return (
    <li className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{props.title}</h3>
          <p className="movies-card__duration">{props.duration}</p>
        </div>
        <button
          className={isLiked ? "movies-card__button movies-card__button_like" : "movies-card__button movies-card__button_dislike"}
          aria-label="Кнопка лайка или удаления"
          type="button"
          onClick={handleLikeClick}/>
      </div>
      <img className="movies-card__image" alt={props.title} src={props.image}/>
    </li>
  );
}

export default MoviesCard;