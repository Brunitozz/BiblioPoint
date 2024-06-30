import { api } from "../constants/api";

const api_friends = `${api}/list/friends`;

const getFriends = async (id) => {
  const response = await fetch(`${api_friends}?id=${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch friends");
  }
  const data = await response.json();
  return data;
};

export { getFriends };
