import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <div className="page-not-found__info">
          <h2 className="page-not-found__title">404</h2>
          <h3 className="page-not-found__description">Страница не найдена</h3>
        </div>
        <Link className="page-not-found__link" to={-1}>Назад</Link>
      </div>
    </section>
  );
}

export default PageNotFound;