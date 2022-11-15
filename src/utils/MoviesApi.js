import { MOVIES_URL } from "./constans";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

export function getAllMovies() {
  return fetch(MOVIES_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(checkResponse);
  }