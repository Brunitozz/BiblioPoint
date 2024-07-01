import { api } from "../constants/api";

const api_book = `${api}/book`

const getBooks = async () => {
  const response = await fetch(api_book);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await response.json();
  return data;
}

export { getBooks }
