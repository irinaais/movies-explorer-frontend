import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn}/>
      <SearchForm/>
      <MoviesCardList/>
    </section>
  );
}

export default SavedMovies;