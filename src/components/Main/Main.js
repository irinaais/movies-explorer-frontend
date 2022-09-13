import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main() {
  // const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="main">
      <Promo/>
    </main>
  );
}

export default Main;
