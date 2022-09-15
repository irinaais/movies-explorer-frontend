import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/irinaais/how-to-learn" target="_blank">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/irinaais/russian-travel" target="_blank">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="http://mesto.irinaosipova.nomoredomains.sbs/" target="_blank">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;