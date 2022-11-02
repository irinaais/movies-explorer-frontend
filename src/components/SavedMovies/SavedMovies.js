import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <>
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn}/>
      <main className="saved-movies">
        <SearchForm/>
        <MoviesCardList savedMovies={props.savedMovies}/>
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;