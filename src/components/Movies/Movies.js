import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  return (
    <>
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn}/>
      <main className="movies">
        <SearchForm onSubmit={props.onSubmit}/>
        <MoviesCardList movies={props.movies}/>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;