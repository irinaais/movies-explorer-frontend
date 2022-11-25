import {MOVIES_URL} from "./constans";

async function checkResponse(res) {
  if (res.ok) {
    return await res.json();
  }
  throw new Error();
}

export async function getAllMovies() {
  try {
    const movies = await fetch(MOVIES_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    return await checkResponse(movies);
  } catch (err) {
    console.error(err);
  }
}
