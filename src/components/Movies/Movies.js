import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  return (
    <>
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn} openSavedMovies={props.openSavedMovies}/>
      <main className="movies">
        <SearchForm
          onSubmit={props.searchMovie}
          chooseShortMovies={props.chooseShortMovies}
          isShortMovies={props.isShortMovies}
        />
        {props.loader ? (
          <Preloader/>
        ) : (
          <MoviesCardList
            allMovies={props.allMovies}
            filteredMovies={props.filteredMovies}
            moviesFetched={props.moviesFetched}
            searchFailed={props.searchFailed}
            saveMovie={props.saveMovie}
            deleteMovie={props.deleteMovie}
            savedMovies={props.savedMovies}
          />
        )}
      </main>
      <Footer/>
    </>
  );
}

export default Movies;