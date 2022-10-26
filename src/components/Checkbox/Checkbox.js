import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        // name="toggle-films"
        // id="toggle-films"
        onChange={props.chooseShortMovies}
        checked={props.isShortMovies}
      />
      <span className="checkbox__toggle"/>
      <span className="checkbox__title">Короткометражки</span>
    </label>
  );
}

export default Checkbox;