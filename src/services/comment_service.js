import { api } from "../constants/api";

const api_comment = `${api}/comment`


const postComment = async (data) => {
  try {
    const response = await fetch(`${api_comment}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const res = await response.json()
    if (res.error) {
      return false
    }
    return true
  } catch (error) {
    console.error(error)
  }
}

export { postComment }