import React from "react";
import "./Portfolio.css";
import arrow from "../../images/strelka.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__header">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/irinaais/how-to-learn" target="_blank"
               rel="noreferrer">
              <p className="portfolio__link-text">How To Learn <span
                className="portfolio__link-span">статичный сайт</span></p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={arrow}/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/irinaais/posmotri_v_okno" target="_blank"
               rel="noreferrer">
              <p className="portfolio__link-text">Posmotri V Okno<span
                className="portfolio__link-span">статичный сайт</span></p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={arrow}/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/irinaais/ono-tebe-nado" target="_blank"
               rel="noreferrer">
              <p className="portfolio__link-text">Ono Tebe Nado<span
                className="portfolio__link-span">статичный сайт</span></p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={arrow}/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/irinaais/russian-travel" target="_blank"
               rel="noreferrer">
              <p className="portfolio__link-text">Russian Travel <span
                className="portfolio__link-span">адаптивный сайт</span></p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={arrow}/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/irinaais/react-mesto-api-full" target="_blank"
               rel="noreferrer">
              <p className="portfolio__link-text">Mesto <span className="portfolio__link-span">spa</span></p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={arrow}/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/irinaais/movies-explorer-frontend" target="_blank"
               rel="noreferrer">
              <p className="portfolio__link-text">Movies Explorer <span className="portfolio__link-span">spa</span></p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={arrow}/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/irinaais/ToDo-Planner" target="_blank"
               rel="noreferrer">
              <p className="portfolio__link-text">ToDo Planner <span className="portfolio__link-span">spa</span></p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={arrow}/>
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/irinaais/telegram-horoscope-appr" target="_blank"
               rel="noreferrer">
              <p className="portfolio__link-text">Horoscope Bot <span
                className="portfolio__link-span">telegram mini app</span></p>
              <img className="portfolio__contacts-arrow" alt="Изображение стрелки" src={arrow}/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
