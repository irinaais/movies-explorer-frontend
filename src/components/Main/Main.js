import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main() {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <Header/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  );
}

export default Main;
