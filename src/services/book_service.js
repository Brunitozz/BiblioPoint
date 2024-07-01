import { api } from "../constants/api";

const api_book = `${api}/book`

const getBooks = async () => {
  const response = await axios.get(api_book);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  //const data = await response.json();
  return response;
}

export { getBooks }
