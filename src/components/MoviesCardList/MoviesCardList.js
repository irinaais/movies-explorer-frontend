import React, {useEffect, useState} from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const cardLikeButtonClassName = "movies-card__button movies-card__button_like";
const cardDislikeButtonClassName = "movies-card__button movies-card__button_dislike";
const cardDeleteButtonClassName = "movies-card__button movies-card__button_delete";

function MoviesCardList(props) {
  const pathName = window.location.pathname;
  const [displayedMovies, setDisplayedMovies] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const createMoviesCards = (movie, isLiked) => <MoviesCard
    key={movie.id}
    title={movie.nameRU}
    duration={movie.duration}
    image={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
    button={isLiked ? cardLikeButtonClassName : cardDislikeButtonClassName}
    saveMovie={props.saveMovie}
    deleteMovie={props.deleteMovie}
    movie={movie}
    onLikeClick={handleLikeClick}
  />

  const createSavedMoviesCards = (movie) => <MoviesCard //TODO исправить создание фильма в апи, что исправить тут image
    key={movie._id}
    title={movie.nameRU}
    duration={movie.duration}
    image={movie.image}
    button={cardDeleteButtonClassName}
    saveMovie={props.saveMovie}
    deleteMovie={props.deleteMovie}
    movie={movie}
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

  function handleLikeClick() {
    if (!isLiked) {
      setIsLiked(true);
      props.saveMovie(props.movie);
    } else {
      setIsLiked(false);
      props.deleteMovie();
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
            <>
              <ul className="movies-card-list__list">
                {props.savedMovies.map(createSavedMoviesCards)}
              </ul>
            </>
        ) : (
          <>
            {props.moviesFetched && props.movies.length === 0 && <h2 className="movies-card-list__message">Ничего не найдено</h2>}
            {props.searchFailed &&
              <h2 className="movies-card-list__message">
                Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
              </h2>}
            <ul className="movies-card-list__list">
              {props.movies.slice(0, displayedMovies).map((movie) => {
                const isLiked = props.savedMovies.some((savedMovie) => savedMovie.movieId === movie.id); //проверка по id каждого отфильтрованного фильма на его наличие в массиве сохраненных фильмов
                return createMoviesCards(movie, isLiked);
              })}
            </ul>
            {props.movies.length > displayedMovies && <button
                                                        className="movies-card-list__button"
                                                        type="button"
                                                        aria-label="Кнопка Ещё"
                                                        onClick={changeDisplayedMovies}>Ещё</button>}
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;