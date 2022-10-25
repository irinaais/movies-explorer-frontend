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
  const [movies, setMovies] = useState({});
  const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesFetched, setMoviesFetched] = useState(false);
  const [searchFailed, setSearchFailed] = useState(false);

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
    setSavedFilteredMovies(JSON.parse(localStorage.getItem("filteredMovies")));
  }, [])

  function handleSearchMovie(keyword) {
    moviesApi
      .getAllMovies() //TODO запрашивать ли общий список при каждом поиске или сохранить его в переменную состояния. сделать через useEffect. Если нет в localStorage, то тогда запрос всех фильмов
      .then((movies) => {
        setIsLoading(true);
        setMovies(movies);
        const lowerCaseKeyword = keyword.toLowerCase();
        const filteredMovies = movies.filter(
          movie => movie.nameRU.toLowerCase().includes(lowerCaseKeyword)
        )
        setSavedFilteredMovies(filteredMovies);
        localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies)); //сохранение в localStorage фильмов TODO вынести в отдельную функцию сохранение в localStorage
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
