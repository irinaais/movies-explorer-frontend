import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  return (
    <li className="movies-card">
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{props.title}</h3>
          <p className="movies-card__duration">{props.duration}</p>
        </div>
        <button className={props.button}/>
      </div>
      <img className="movies-card__image" alt={props.title} src={props.image}/>
    </li>
  );
}

export default MoviesCard;