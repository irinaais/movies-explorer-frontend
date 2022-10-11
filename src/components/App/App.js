import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }

  return (
    // <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn}/>}/>
          <Route path="/movies" element={<Movies loggedIn={loggedIn}/>}/>
          <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn}/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
        </Routes>
        <Footer/>
      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
