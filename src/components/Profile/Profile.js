import React from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile(props) {
  return (
    <>
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn}/>
      <section className="profile">
        <div className="profile__container">
          <form className="profile__form">
            <h2 className="profile__title">Привет, {props.name}!</h2>
            <fieldset className="profile__info">
              <div className="profile__label">
                <span className="profile__input-text">Имя</span>
                <input className="profile__input profile__input_name-user" type="text" id="nameUser-input" required
                       minLength="2" maxLength="40" placeholder={props.name} name="nameUser" value={props.name || ""}/>
                <span className="profile__input-error nameUser-input-error"/>
              </div>
              <div className="profile__label">
                <span className="profile__input-text">E-mail</span>
                <input className="profile__input profile__input_email-user" type="email" id="emailUser-input" required
                      minLength="2" maxLength="40" placeholder={props.email} name="emailUser" value={props.email || ""}/>
                <span className="profile__input-error emailUser-input-error"/>
              </div>
            </fieldset>
            <div className="profile__buttons">
              <button className="profile__button profile__button_edit" type="button">Редактировать</button>
              <button className="profile__button profile__button_exit" type="button">Выйти из аккаунта</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;