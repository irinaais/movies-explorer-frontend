# Movies Explorer (фронтенд)
Репозиторий для фронтенд-части приложения с интерфейсом на React.js. 

Приложение — поисковик по фильмам, в котором можно создавать список любимых кинолент.
Главная страница описывает проект, содержит информацию обо мне и примеры других моих работ.
Использовала: `React.js`, `JavaScript`, `CSS`, `HTML`, `БЭМ (Nested)`, `Адаптивная верстка`, `JWT`, `LocalStorage`,
`REST API`, `Create-react-app`,`React Router`, `React Context`, `ESLint`, `Figma`, `Flexbox`, `Grid Layout`.  

Дипломная работа в Яндекс.Практикуме по специальности "Веб-разработчик".

### Структура
Приложение состоит из двух частей:

* фронтенд (этот репозиторий)
* [бэкенд](https://github.com/irinaais/movies-explorer-api)

### Функциональность
* регистрация
* аутентификация
* редактирование профиля
* возможность ставить лайки (сохранять фильмы)
* возможность убирать лайк (удалять фильм из списка сохраненных)
* поиск по базе фильмов
* поиск по списку сохраненных фильмов
* просмотр трейлера фильма после клика на карточку фильма
* валидация полей перед отправкой на сервер
* прелоудеры с анимацией во время запросов к серверу

### Используемые API
* собственное API для регистрации и аутентификации, а также хранения сохраненных фильмов
* публичное API для получения списка фильмов BeatFilm `https://api.nomoreparties.co/beatfilm-movies`

### Изменения в приложении после сдачи дипломной работы
* добавлена анимация и тени на главной странице
* на странице Фильмы сразу отображается весь список фильмов, по которым можно осуществлять поиск
* если навести курсор на постер, появится описание фильма
* скруглила края карточек фильмов и кнопки
* добавила на главную страницу описание функциональности приложения

### Планы по доработке
* debounce-логика для поиска фильмов
* переписать все запросы к серверу с promises на async/await

Ссылка на макет в Figma - https://disk.yandex.ru/d/yJ6rIZ3_tO7gRw

Ссылка на frontend - movies.irinaosipova.nomoredomains.sbs

Ссылка на backend - api.movies.irinaosipova.nomoredomains.sbs

Публичный IP-адрес сервера - 51.250.24.224
