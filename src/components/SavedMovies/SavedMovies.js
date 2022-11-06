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
        <SearchForm
          onSubmit={props.searchSavedMovie}
          chooseShortMovies={props.chooseShortMovies}
          isShortMovies={props.isShortMovies}
        />
        <MoviesCardList
          filteredSavedMovies={props.filteredSavedMovies}
          deleteMovie={props.deleteMovie}
          savedMoviesFetched={props.savedMoviesFetched}
        />
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;