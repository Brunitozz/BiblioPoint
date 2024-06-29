import { api } from "../constants/api";

const api_post = `${api}/post`


const postPost = async (data) => {
  try {
    const response = await fetch(`${api_post}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const res = await response.json();
    if (res.error) {
      return false
    }
    return true
  } catch (error) {
    console.error(error)
  }
}

export { postPost }
