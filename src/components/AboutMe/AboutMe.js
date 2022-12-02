import React from "react";
import "./AboutMe.css";
import photo from "../../images/avatar.png";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info-container">
          <div className="about-me__info">
            <h3 className="about-me__name">Ирина</h3>
            <p className="about-me__description">Веб-разработчик, 32 года</p>
            <p className="about-me__text">На данный момент я живу в Грузии. Высшее образование получила в Орловском
              государственном университете по специальности «Документоведение и документационное обеспечение управления»,
              но меня всегда очень привлекало программирование. В ноябре 2022 года закончила обучение в Яндекс.Практикуме
              на веб-разработчика. Люблю читать, играть в компьютерные игры и хочу связать свою дальнейшую карьеру с программированием.</p>
            <ul className="about-me__contacts-list">
              <li className="about-me__contacts-item">
                <a className="about-me__contacts-link" href="https://github.com/irinaais" target="_blank" rel="noreferrer">Github</a>
              </li>
              <li className="about-me__contacts-item">
                <a className="about-me__contacts-link" href="https://vk.com/irinaais" target="_blank" rel="noreferrer">Vkontakte</a>
              </li>
              <li className="about-me__contacts-item">
                <a className="about-me__contacts-link" href="https://t.me/Iris57" target="_blank" rel="noreferrer">Telegram</a>
              </li>
            </ul>
          </div>
          <img className="about-me__image" alt="Фотография студента" src={ photo }/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;