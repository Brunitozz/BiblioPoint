import { api } from "../constants/api";

const apiUser = `${api}/user`;

const getUser = async (id) => {
  const response = await fetch(`${apiUser}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  const data = await response.json();
  return data;
};

export { getUser };
