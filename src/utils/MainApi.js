import { BASE_URL } from "./constans";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name, email, password})
  })
    .then(checkResponse)
    .then((res) => {
      return res;
    })
}

export function authorise(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password})
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    })
}

//принимает на вход JWT. Он б. отправлен на сервер и, если токен действителен, вернет ответ с инф-й о пользов-ле
export function tokenCheck(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(checkResponse)
}

export function updateProfile(name, email) {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({name, email})
  })
    .then(checkResponse)
}

export function saveMovie(movie) {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      country: movie.country ?? 'country',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink ?? `https://www.youtube.com/results?search_query=трейлер+${movie.nameRU}`,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    })
  })
    .then(checkResponse)
}

export function deleteMovie(id) {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(checkResponse)
    .then((res) => {
      return res;
    })
}

export function getAllSavedMovies() {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then(checkResponse);
}