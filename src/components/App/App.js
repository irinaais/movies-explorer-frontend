import React from "react";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  return (
    // <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
