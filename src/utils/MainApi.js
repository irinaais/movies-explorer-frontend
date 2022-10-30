import { BASE_URL } from "./constans";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
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
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
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

// export function getUserInfo(token) {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: "GET",
//     headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
//   })
// }

export function getAllSavedMovies() {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(checkResponse);
}