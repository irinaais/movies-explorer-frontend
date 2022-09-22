import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <>
      <Header/>
      <main className="movies">
        <SearchForm/>
        <MoviesCardList/>
      </main>
    </>
  );
}

export default Movies;