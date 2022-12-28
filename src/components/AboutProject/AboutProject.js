import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__header">О проекте</h2>
        <p className="about-project__description">На сайте можно зарегистрироваться, найти информацию об интересующем фильме и составить список избранного.
        При наведении курсора на постер фильма появляется его описание, а при нажатии - открывается трейлер.</p>
        <ul className="about-project__list">
          <li className="about-project__list-item">
            <h3 className="about-project__list-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__list-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__list-item">
            <h3 className="about-project__list-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__list-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="about-project__container-scheme">
          <div className="about-project__container-backend">
            <p className="about-project__container-scheme-title about-project__container-title_backend">1 неделя</p>
            <p className="about-project__container-description">Back-end</p>
          </div>
          <div className="about-project__container-frontend">
            <p className="about-project__container-scheme-title about-project__container-title_frontend">4 недели</p>
            <p className="about-project__container-description">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;