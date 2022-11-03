import React, {useEffect, useState} from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const pathName = window.location.pathname;
  const [displayedMovies, setDisplayedMovies] = useState(0);

  const cardLikeButtonClassName = "movies-card__button movies-card__button_like";
  const cardDislikeButtonClassName = "movies-card__button movies-card__button_dislike";
  const cardDeleteButtonClassName = "movies-card__button movies-card__button_delete";

  const createMoviesCards = (movie, isLiked) => <MoviesCard
    key={movie.id}
    title={movie.nameRU}
    duration={movie.duration}
    image={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
    button={isLiked? cardLikeButtonClassName : cardDislikeButtonClassName}
    saveMovie={props.saveMovie}
    clickOnTheButton={() => handleLikeClick(isLiked, movie.id)}
    movie={movie}
  />

  const createSavedMoviesCards = (movie) => <MoviesCard //TODO исправить создание фильма в апи, что исправить тут image
    key={movie._id}
    title={movie.nameRU}
    duration={movie.duration}
    image={movie.image}
    clickOnTheButton={() => props.deleteMovie(movie._id)}
    movie={movie}
    button={cardDeleteButtonClassName}
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

  function handleLikeClick(isLiked, id) {
    if (!isLiked) {
      props.saveMovie(props.movie); // исправить TODO
    } else {
      const savedMovie = props.savedMovies.find(savedMovie => savedMovie.movieId === id);
      props.deleteMovie(savedMovie._id); // передаем в аргумент конвертированный id
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