import React, {useState} from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const hours = Math.trunc(props.duration/60);
  const minutes = Math.trunc(props.duration - hours * 60);
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    if (!isLiked) {
      setIsLiked(true);
      props.saveMovie(props.movie);
    } else {
      setIsLiked(false);
      props.deleteMovie();
    }
  }

  return (
    <li className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{props.title}</h3>
          <p className="movies-card__duration">{hours} ч {minutes} мин</p>
        </div>
        <button
          className={isLiked ? "movies-card__button movies-card__button_like" : "movies-card__button movies-card__button_dislike"}
          aria-label="Кнопка сохранения или удаления фильма"
          type="button"
          onClick={handleLikeClick}/>
      </div>
      <img className="movies-card__image" alt={props.title} src={props.image}/>
    </li>
  );
}

export default MoviesCard;