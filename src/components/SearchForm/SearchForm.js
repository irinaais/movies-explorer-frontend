import React, {useState} from "react";
import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";

function SearchForm(props) {
  const [keyword, setKeyword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorText, setErrorText] = useState("");

  function handleChange(evt) {
    setKeyword(evt.target.value);
    setIsValid(evt.target.closest("form").checkValidity());
    if (isValid) {
      return setErrorText("");
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsValid(evt.target.closest("form").checkValidity());
    if (!isValid) {
      return setErrorText("Нужно ввести ключевое слово");
    }
    props.onSubmit(keyword);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={ handleSubmit } noValidate>
          <div className="search-form__input-container">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              required
              value={keyword || ""}
              onChange={ handleChange }
              minLength="1"
              maxLength="30"
              name="keyword"
            />
            <button className="search-form__button" type="submit" aria-label="Найти фильм"/>
          </div>
          <span className="search-form__input-error keyword-input-error">{ errorText }</span>
        </form>
        <Checkbox/>
        <div className="search-form__line"/>
      </div>
    </section>
  );
}

export default SearchForm;