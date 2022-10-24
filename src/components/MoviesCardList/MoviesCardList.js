import React, {useEffect, useState} from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import design from "../../images/33_slova_o_design.svg";
import hundredYears from "../../images/1000_let_design.svg";
import benksi from "../../images/v_pogone_za_benksi.svg";

// const cardLikeButtonClassName = "movies-card__button movies-card__button_like";
const cardDislikeButtonClassName = "movies-card__button movies-card__button_dislike";
const cardDeleteButtonClassName = "movies-card__button movies-card__button_delete";

function MoviesCardList(props) {
  const pathName = window.location.pathname;
  const [displayedMovies, setDisplayedMovies] = useState(0);

  const createMoviesCards = (movie) => <MoviesCard
    key={movie.id}
    title={movie.nameRU}
    duration={movie.duration}
    image={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
    button={cardDislikeButtonClassName}
  />

  function changeDisplayedMovies() {
    setDisplayedMovies(displayedMovies + displayedMovies);
  }

  function calcOfNumberOfDisplayedMovies() {
    if (window.innerWidth < 768) {
      setDisplayedMovies(5);
    } else {
      setDisplayedMovies(7);
    }
  }

  useEffect(() => {
    calcOfNumberOfDisplayedMovies();
    window.addEventListener("resize", calcOfNumberOfDisplayedMovies);
  }, [])

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
            {props.moviesFetched && props.movies.length === 0 && <h2 className="movies-card-list__message">Ничего не найдено</h2>}
            {props.searchFailed &&
              <h2 className="movies-card-list__message">
                Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
              </h2>}
            <ul className="movies-card-list__list">
              {props.movies.slice(0, displayedMovies).map(createMoviesCards)}
            </ul>
            {props.movies.length > 7 && <button className="movies-card-list__button" type="button" aria-label="Кнопка Ещё" onClick={changeDisplayedMovies}>Ещё</button>}
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;