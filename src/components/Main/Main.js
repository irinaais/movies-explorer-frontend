import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main() {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <Promo/>
      <AboutProject/>
    </main>
  );
}

export default Main;
