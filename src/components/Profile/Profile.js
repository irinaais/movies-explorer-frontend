import React, {useContext} from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  // const [differences, setDifferences] = useState(false);

  return (
    <>
      <Header theme={"header_theme_dark"} loggedIn={props.loggedIn}/>
      <main className="profile">
        <div className="profile__container">
          <form className="profile__form">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <fieldset className="profile__info">
              <div className="profile__label">
                <span className="profile__input-text">Имя</span>
                <input
                  className="profile__input profile__input_name-user"
                  type="text" id="nameUser-input"
                  required
                  minLength="2"
                  maxLength="40"
                  name="nameUser"
                  value={currentUser.name || ""}
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
                  value={currentUser.email || ""}
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
                />
                <span className="profile__input-error emailUser-input-error">{emailError}</span>
              </div>
            </fieldset>
            <div className="profile__buttons">
              <button
                className="profile__button profile__button_edit"
                type="button"
                aria-label="Редактировать профиль">Редактировать
                {/*disabled={differences}*/}
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