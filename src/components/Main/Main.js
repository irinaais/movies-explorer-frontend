import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main() {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
    </main>
  );
}

export default Main;
