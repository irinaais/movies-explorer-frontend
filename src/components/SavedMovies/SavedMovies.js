import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn}/>
    </section>
  );
}

export default SavedMovies;