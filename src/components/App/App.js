import React, {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import * as moviesApi from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import ProtectedAuthRoute from "../ProtectedAuthRoute/ProtectedAuthRoute";

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]); //отфильтрованные фильмы, сохраненные в
  // localStorage, которые будут показываться на странице /movies
  const [loader, setLoader] = useState(false); //отображение прелоудера
  const [moviesFetched, setMoviesFetched] = useState(false); //поиск фильмов был
  const [searchFailed, setSearchFailed] = useState(false); //произошла ошибка при поиске фильма
  const [isShortMovies, setIsShortMovies] = useState(false); //состояние чекбокса на странице /movies
  const [isShortSavedMovies, setIsShortSavedMovies] = useState(false); //состояние чекбокса на странице /saved-movies
  const [errorOfRegister, setErrorOfRegister] = useState("");
  const [errorOfLogin, setErrorOfLogin] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]); //сохраненные через апи фильмы
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [savedMoviesFetched, setSavedMoviesFetched] = useState(false);
  const [resultOfEdit, setResultOfEdit] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordForSavedMovies, setKeywordForSavedMovies] = useState("");
  const navigate = useNavigate();

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      return mainApi.tokenCheck(token)
        .then((userInfo) => {
          if (userInfo) {
            setLoggedIn(true);
            setCurrentUser(userInfo);
            setIsLoading(false);
            return true;
          } else {
            localStorage.removeItem("token");
            setIsLoading(false);
            return false;
          }
        })
        .catch((err) => { //если токен не корректный
          setIsLoading(false);
          handleSignOut();
          console.log(`Ошибка: ${err.status}`)
        });
    } else {
      setIsLoading(false);
    }
  }

  function handleRegister(name, email, password) {
    setIsLoading(true);
    mainApi.register(name, email, password)
      .then((res) => {
        if (res.data) {
          handleLogin(email, password);
          setErrorOfRegister("");
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
        err.status === 409
         ? setErrorOfRegister("Пользователь с таким email уже существует")
         : setErrorOfRegister("При регистрации пользователя произошла ошибка")
      })
      .finally(() => setIsLoading(false))
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    mainApi.authorise(email, password)
      .then((data) => {
        if (data.token) {
          tokenCheck().then((res) => {
            if (res) {
              navigate("/movies");
            }
          });
          setErrorOfLogin("")
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
        if (err.status === 401) {
          setErrorOfLogin("Вы ввели неправильный логин или пароль");
        } else if (err.status === 400) {
          setErrorOfLogin("При авторизации произошла ошибка. Токен не передан или передан не в том формате");
        } else if (err.status === 403) {
          setErrorOfLogin("При авторизации произошла ошибка. Переданный токен некорректен");
        }
      })
      .finally(() => setIsLoading(false))
  }

  function handleUpdateProfile(name, email) {
    setIsLoading(true);
    mainApi.updateProfile(name,email)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setResultOfEdit("Данные профиля успешно изменены");
        setTimeout(() => {setIsLoading(false)}, 600);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
        err.status === 409
          ? setResultOfEdit("Пользователь с таким email уже существует")
          : setResultOfEdit("При обновлении профиля произошла ошибка")
      })
      .finally(()=> setTimeout(() => {setResultOfEdit("")}, 2000))
  }

  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    navigate("/");
  }

  function handleChoosingShortMovies() { //переключение чекбокса короткометражек на странице /movies
    setIsShortMovies(!isShortMovies);
    setMoviesFetched(true);
  }

  function handleChoosingShortSavedMovies() { //переключение чекбокса короткометражек на странице /saved-movies
    setIsShortSavedMovies(!isShortSavedMovies);
    setMoviesFetched(true);
  }

  function handleSearchMovie(keyword) {
    setKeyword(keyword);
    setMoviesFetched(true); //поиск произошел
  }

  function handleSearchSavedMovie(keywordForSavedMovies) {
    setKeywordForSavedMovies(keywordForSavedMovies);
  }

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then(newMovie => setSavedMovies([newMovie, ...savedMovies])) //изменяю состояние списка сохраненных фильмов, добавляя новый сохраненный фильм
      .catch((err) => console.log(`Ошибка: ${err.status}`))
  }

  function handleDeleteMovie(id) {
    mainApi.deleteMovie(id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(savedMovie => id !== savedMovie._id);
        setSavedMovies(newSavedMovies); //изменяем состояние списка сохраненных фильмов
      })
      .catch((err) => console.log(`Ошибка: ${err.status}`))
  }

  function handleOpenSavedMovies() { //при переходе на /saved-movies отображаются сначала все сохраненные фильмы
    setIsShortSavedMovies(false);
    setKeywordForSavedMovies("");
  }

  useEffect(() => {
    moviesApi
      .getAllMovies()
      .then((movies) => {
        setLoader(true); //показываем прелоадер
        setAllMovies(movies);
      })
      .catch((err) => {
        setSearchFailed(true); //произошла ошибка при поиске
        console.log(`Ошибка: ${err.status}`);
      })
      .finally(() => setTimeout(() => setLoader(false), 800))
  }, []);

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      mainApi.getAllSavedMovies()
        .then(movies => {
          setSavedMovies(movies);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (!loggedIn) return;
    const lowerCaseKeyword = keyword.toLowerCase();
    let filteredMovies = allMovies.filter(
      movie => movie.nameRU.toLowerCase().includes(lowerCaseKeyword)
    );
    if (isShortMovies) {
      filteredMovies = filteredMovies.filter(movie => movie.duration <= 40);
    }
    setFilteredMovies(filteredMovies);
    setKeyword(keyword);
  }, [allMovies, keyword, isShortMovies, loggedIn]);

  useEffect(() => {
    if (!loggedIn) return;
    const lowerCaseKeyword = keywordForSavedMovies.toLowerCase();
    let filteredSavedMovies = savedMovies.filter(
      savedMovie => savedMovie.nameRU.toLowerCase().includes(lowerCaseKeyword)
    );
    if (isShortSavedMovies) {
      filteredSavedMovies = filteredSavedMovies.filter(
        movie => movie.duration <= 40
      );
    }
    setFilteredSavedMovies(filteredSavedMovies);
    setSavedMoviesFetched(true);
  }, [savedMovies, keywordForSavedMovies, isShortSavedMovies, loggedIn]);

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        {isLoading ? (
          <Preloader/>
        ) : (
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} openSavedMovies={handleOpenSavedMovies}/>}/>
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    keyword={keyword}
                    loggedIn={loggedIn}
                    searchMovie={handleSearchMovie}
                    filteredMovies={filteredMovies}
                    allMovies={allMovies}
                    loader={loader}
                    moviesFetched={moviesFetched}
                    isErrorOfSearch={searchFailed}
                    chooseShortMovies={handleChoosingShortMovies}
                    isShortMovies={isShortMovies}
                    saveMovie={handleSaveMovie}
                    deleteMovie={handleDeleteMovie}
                    savedMovies={savedMovies}
                    openSavedMovies={handleOpenSavedMovies}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    filteredSavedMovies={filteredSavedMovies}
                    deleteMovie={handleDeleteMovie}
                    searchSavedMovie={handleSearchSavedMovie}
                    savedMoviesFetched={savedMoviesFetched}
                    chooseShortMovies={handleChoosingShortSavedMovies}
                    isShortMovies={isShortSavedMovies}
                    openSavedMovies={handleOpenSavedMovies}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  {currentUser && (
                    <Profile
                      loggedIn={loggedIn}
                      onSignOut={handleSignOut}
                      onUpdateUser={handleUpdateProfile}
                      resultOfEdit={resultOfEdit}
                      openSavedMovies={handleOpenSavedMovies}
                    />
                    )}
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <ProtectedAuthRoute loggedIn={loggedIn}>
                  <Login
                    name="Виталий"
                    email="pochta@yandex.ru"
                    onLogin={handleLogin}
                    errorOfLogin={errorOfLogin}
                  />
                </ProtectedAuthRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedAuthRoute loggedIn={loggedIn}>
                  <Register
                    name="Виталий"
                    email="pochta@yandex.ru"
                    onRegister={handleRegister}
                    errorOfRegister={errorOfRegister}
                  />
                </ProtectedAuthRoute>
              }
            />
            <Route path="/*" element={<PageNotFound/>}/>
          </Routes>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
