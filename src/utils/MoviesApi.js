const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getAllMovies() {
  return fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(checkResponse);
  }