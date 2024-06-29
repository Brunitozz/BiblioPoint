import { api } from "../constants/api";

const api_user = `${api}/user`

const updateUser = async ({ id, name, password }) => {
  try {
    const response = await fetch(`${api_user}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password })
    });
    const data = await response.json();
    if (data.error) {
      return false
    }
    return true
  } catch (error) {
    console.error(error)
  }
}

export { updateUser }
