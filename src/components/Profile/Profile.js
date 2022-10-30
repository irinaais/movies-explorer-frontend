import React, {useContext, useState, useRef, useEffect} from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const formRef = useRef();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  function validationForm() {
    const formTag = formRef.current;
    if (formTag.checkValidity()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
    if (evt.target.validity.valid) {
      setNameError("");
    } else {
      setNameError("Минимум - 2 символа, максимум - 40");
    }
    validationForm();
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    if (evt.target.validity.valid) {
      setEmailError("");
    } else {
      setEmailError("Введён некорректный e-mail");
    }
    validationForm();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser(name, email);
  }

  useEffect(() => {
    if (isValid && (name !== currentUser.name || email !== currentUser.email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, currentUser.name, currentUser.email])

  return (
    <>
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn}/>
      <main className="profile">
        <div className="profile__container">
          <form className="profile__form" noValidate ref={formRef} onSubmit={handleSubmit}>
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <fieldset className="profile__info">
              <div className="profile__label">
                <span className="profile__input-text">Имя</span>
                <input
                  className="profile__input profile__input_name-user"
                  type="text"
                  id="nameUser-input"
                  required
                  minLength="2"
                  maxLength="40"
                  name="nameUser"
                  defaultValue={currentUser.name}
                  onChange={handleChangeName}
                />
                <span className="profile__input-error nameUser-input-error">{nameError}</span>
              </div>
              <div className="profile__label">
                <span className="profile__input-text">E-mail</span>
                <input
                  className="profile__input profile__input_email-user"
                  type="email"
                  id="emailUser-input"
                  required
                  minLength="2"
                  maxLength="40"
                  name="emailUser"
                  defaultValue={currentUser.email}
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
                  onChange={handleChangeEmail}
                />
                <span className="profile__input-error emailUser-input-error">{emailError}</span>
              </div>
            </fieldset>
            <div className="profile__buttons">
              <button
                className="profile__button profile__button_edit"
                type="submit"
                aria-label="Редактировать профиль"
                disabled={isDisabled}>Редактировать
              </button>
              <button
                className="profile__button profile__button_exit"
                type="button"
                aria-label="Выйти из аккаунта"
                onClick={props.onSignOut}>Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;