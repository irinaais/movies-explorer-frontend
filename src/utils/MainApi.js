import { BASE_URL } from "./constans";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getAllSavedMovies() {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(checkResponse);
}