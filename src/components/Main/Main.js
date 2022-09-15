import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main() {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <Promo/>
      <AboutProject/>
      <Techs/>
    </main>
  );
}

export default Main;
