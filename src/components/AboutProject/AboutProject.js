import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__container">
        <li className="about-project__container-item">
          <h3 className="about-project__container-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__container-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__container-item">
          <h3 className="about-project__container-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__container-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
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
    </section>
  );
}

export default AboutProject;