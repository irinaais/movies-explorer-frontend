import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main(props) {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <Header theme={"header_theme_light"} loggedIn={props.loggedIn}/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </main>
  );
}

export default Main;
