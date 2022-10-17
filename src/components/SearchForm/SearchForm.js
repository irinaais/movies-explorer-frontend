import React from "react";
import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <input className="search-form__input" type="text" placeholder="Фильм"/>
          <button className="search-form__button" type="submit" aria-label="Найти фильм"/>
        </form>
        <Checkbox/>
        <div className="search-form__line"/>
      </div>
    </section>
  );
}

export default SearchForm;