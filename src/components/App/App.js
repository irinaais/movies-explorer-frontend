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

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]); //отфильтрованные фильмы, сохраненные в
  // localStorage, которые будут показываться на странице /movies
  const [loader, setLoader] = useState(false); //отображение прелоудера
  const [moviesFetched, setMoviesFetched] = useState(false); //поиск фильмов был
  const [searchFailed, setSearchFailed] = useState(false); //произошла ошибка при поиске фильма
  const [isShortMovies, setIsShortMovies] = useState(false); //состояние чекбокса
  const [errorOfRegister, setErrorOfRegister] = useState("");
  const [errorOfLogin, setErrorOfLogin] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]); //сохраненные через апи фильмы TODO нужно ли убрать переменные, передаваемые в пропсах в savedMovies
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [savedMoviesFetched, setSavedMoviesFetched] = useState(false);
  const [resultOfEdit, setResultOfEdit] = useState("");
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
        .catch(err => console.log(`Ошибка: ${err.status}`));
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

  function handleChoosingShortMovies() { //переключение чекбокса короткометражек
    setIsShortMovies(!isShortMovies);
    localStorage.setItem("checkbox", (!isShortMovies).toString());
  }

  function handleSearchMovie(keyword) {
    moviesApi
      .getAllMovies()
      .then((movies) => {
        setLoader(true); //показываем прелоадер
        const lowerCaseKeyword = keyword.toLowerCase();
        const filteredMovies = movies.filter(
          movie => movie.nameRU.toLowerCase().includes(lowerCaseKeyword)
        );
        setMoviesFetched(true); //поиск произошел
        if (isShortMovies) { //если включен фильтр короткометражек
          const shortFilteredMovies = filteredMovies.filter(
            movie => movie.duration <= 40
          );
          setFilteredMovies(shortFilteredMovies);
          localStorage.setItem("filteredMovies", JSON.stringify(shortFilteredMovies)); //сохранение в localStorage результата поиска фильмов
        } else {
          setFilteredMovies(filteredMovies);
          localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies)); //сохранение в localStorage результата поиска фильмов
        }
        localStorage.setItem("keyword", keyword); //сохранение в localStorage keyword
      })
      .catch((err) => {
        setSearchFailed(true);
        console.log(`Ошибка: ${err.status}`);
      })
      .finally(() => setTimeout(() => setLoader(false), 800))
  }

  function handleSearchSavedMovie(keyword) {
    const lowerCaseKeyword = keyword.toLowerCase();
    const filteredSavedMovies = savedMovies.filter(
      savedMovie => savedMovie.nameRU.toLowerCase().includes(lowerCaseKeyword)
    );
    setSavedMoviesFetched(true);
    if (isShortMovies) {
      const shortFilteredSavedMovies = filteredSavedMovies.filter(
        movie => movie.duration <= 40
      );
      setFilteredSavedMovies(shortFilteredSavedMovies);
    } else {
      setFilteredSavedMovies(filteredSavedMovies);
    }
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
        setFilteredSavedMovies(filteredSavedMovies.filter(movie => movie._id !== id));
      })
      .catch((err) => console.log(`Ошибка: ${err.status}`))
  }

  useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      setFilteredMovies(JSON.parse(localStorage.getItem("filteredMovies")) || []); //проверяем, есть ли в localStorage отфильтрованные фильмы
      setIsShortMovies(localStorage.getItem("checkbox") === "true"); //проверяем, если ли в localStorage состояние чекбокса короткометражек
      mainApi.getAllSavedMovies()
        .then(movies => {
          setSavedMovies(movies);
          setFilteredSavedMovies(movies);
        });
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        {isLoading ? (
          <Preloader/>
        ) : (
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    loggedIn={loggedIn}
                    searchMovie={handleSearchMovie}
                    movies={filteredMovies}
                    loader={loader}
                    moviesFetched={moviesFetched}
                    isErrorOfSearch={searchFailed}
                    chooseShortMovies={handleChoosingShortMovies}
                    isShortMovies={isShortMovies}
                    saveMovie={handleSaveMovie}
                    deleteMovie={handleDeleteMovie}
                    savedMovies={savedMovies}
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
                    chooseShortMovies={handleChoosingShortMovies}
                    isShortMovies={isShortMovies}
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
                    />
                    )}
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  name="Виталий"
                  email="pochta@yandex.ru"
                  onLogin={handleLogin}
                  errorOfLogin={errorOfLogin}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  name="Виталий"
                  email="pochta@yandex.ru"
                  onRegister={handleRegister}
                  errorOfRegister={errorOfRegister}
                />
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
