import React from "react";
import "./Portfolio.css";
import arrow from "../../images/strelka.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/irinaais/how-to-learn" target="_blank">
            <p className="portfolio__link-text">Статичный сайт</p>
            <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={ arrow }/>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/irinaais/russian-travel" target="_blank">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={ arrow }/>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="http://mesto.irinaosipova.nomoredomains.sbs/" target="_blank">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={ arrow }/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;