import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo.png";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info-container">
          <div className="about-me__info">
            <h3 className="about-me__name">Ирина</h3>
            <p className="about-me__description">Веб-разработчик, 33 года</p>
            <p className="about-me__text">Опыт работы и soft-skills:
              <ul>
                <li>
                  <p>Разрабатывала с нуля как небольшие, так и крупные веб-приложения, а также Telegram Mini Apps</p>
                </li>
                <li>
                  <p>Имею опыт работы в команде как удаленно, так и в офисе</p>
                </li>
                <li>
                  <p>Умею эффективно общаться и разрешать конфликтные ситуации</p>
                </li>
                <li>
                  <p>Не боюсь трудностей и не замалчиваю проблемы</p>
                </li>
              </ul>
            </p>
            <ul className="about-me__contacts-list">
              <li className="about-me__contacts-item">
                <a className="about-me__contacts-link" href="https://github.com/irinaais" target="_blank"
                   rel="noreferrer">Github</a>
              </li>
              <li className="about-me__contacts-item">
                <a className="about-me__contacts-link" href="https://vk.com/irinaais" target="_blank"
                   rel="noreferrer">Vkontakte</a>
              </li>
              <li className="about-me__contacts-item">
                <a className="about-me__contacts-link" href="https://t.me/Iris57" target="_blank"
                   rel="noreferrer">Telegram</a>
              </li>
            </ul>
          </div>
          <img className="about-me__image" alt="Фотография студента" src={photo}/>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
