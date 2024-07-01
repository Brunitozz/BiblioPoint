import { api } from "../constants/api";

const postSearch = async (prefix) => {
  const response = await fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prefix })
  });
  if (!response.ok) {
    throw new Error('Failed to fetch search');
  }
  const data = await response.json();
  return data;
}

export { postSearch }
