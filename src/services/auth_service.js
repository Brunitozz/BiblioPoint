import { api } from "../constants/api";

const login = async (username, password) => {
    try {
      const response = await fetch(`${api}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  const register = async (username, password, name) => {
    try {
      const response = await fetch(`${api}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, name })
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export { login, register };