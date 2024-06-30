import { api } from "../constants/api";

const api_post = `${api}/post`;

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
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};

const getPosts = async (token) => {
  try {
    const response = await fetch(`${api}/feed`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { postPost, getPosts };
