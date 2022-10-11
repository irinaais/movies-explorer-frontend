import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <>
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn}/>
      <main className="movies">
        <SearchForm/>
        <MoviesCardList/>
      </main>
    </>
  );
}

export default Movies;