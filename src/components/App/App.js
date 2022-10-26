import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import * as moviesApi from "../../utils/MoviesApi";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState({}); //все фильмы от сервера
  const [savedFilteredMovies, setSavedFilteredMovies] = useState([]); //отфильтрованные фильмы
  const [isLoading, setIsLoading] = useState(false); //отображение прелоудера
  const [moviesFetched, setMoviesFetched] = useState(false); //поиск фильмов был
  const [searchFailed, setSearchFailed] = useState(false); //произошла ошибка при поиске фильма
  const [isShortMovies, setIsShortMovies] = useState(false); //состояние чекбокса

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    setSavedFilteredMovies(JSON.parse(localStorage.getItem("filteredMovies"))); //проверяем, есть ли в localStorage отфильтрованные фильмы
    setIsShortMovies(localStorage.getItem("checkbox") === "true"); //проверяем, если ли в localStorage состояние чекбокса короткометражек
  }, [])

  function handleChoosingShortMovies() { //переключение чекбокса короткометражек
    setIsShortMovies(!isShortMovies);
    localStorage.setItem("checkbox", !isShortMovies);
  }

  function handleSearchMovie(keyword) {
    moviesApi
      .getAllMovies() //TODO запрашивать ли общий список при каждом поиске или сохранить его в переменную состояния. сделать через useEffect. Если нет в localStorage, то тогда запрос всех фильмов
      .then((movies) => {
        setIsLoading(true);
        setMovies(movies);
        const lowerCaseKeyword = keyword.toLowerCase();
        const filteredMovies = movies.filter(
          movie => movie.nameRU.toLowerCase().includes(lowerCaseKeyword)
        );
        if (isShortMovies) {
          const shortFilteredMovies = filteredMovies.filter(
            movie => movie.duration <= 40
          );
          setSavedFilteredMovies(shortFilteredMovies);
          localStorage.setItem("filteredMovies", JSON.stringify(shortFilteredMovies)); //сохранение в localStorage результата поиска фильмов
        } else {
          setSavedFilteredMovies(filteredMovies);
          localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies)); //сохранение в localStorage результата поиска фильмов
        }
        localStorage.setItem("keyword", keyword); //сохранение в localStorage keyword
        setMoviesFetched(true); //поиск произошел
        setTimeout(() => setIsLoading(false), 800);
      })
      .catch((err) => {
        setSearchFailed(true);
        console.log(err);
        console.log(movies); //TODO убрать
      })
  }

  return (
    // <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
          <Route path="/movies" element={<Movies
                                          loggedIn={loggedIn}
                                          onSubmit={handleSearchMovie}
                                          movies={savedFilteredMovies}
                                          isLoading={isLoading}
                                          moviesFetched={moviesFetched}
                                          isErrorOfSearch={searchFailed}
                                          chooseShortMovies={handleChoosingShortMovies}
                                          isShortMovies={isShortMovies}
          />}/>
          <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn}/>}/>
          <Route path="/profile" element={<Profile loggedIn={loggedIn} name="Виталий" email="pochta@yandex.ru"/>}/>
          <Route path="/signin" element={<Login loggedIn={loggedIn} name="Виталий" email="pochta@yandex.ru"/>}/>
          <Route path="/signup" element={<Register loggedIn={loggedIn} name="Виталий" email="pochta@yandex.ru"/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
