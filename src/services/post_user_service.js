import { api } from "../constants/api";

const api_posts = `${api}/posts/user`;

const getUserPosts = async (userId) => {
  const response = await fetch(`${api_posts}?id=${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data;
};

export { getUserPosts };
