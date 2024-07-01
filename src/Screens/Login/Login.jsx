import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {login} from "../../services/auth_service";

export const Login = () => {
  const loginFormRef = useRef(null);

  useEffect(() => {
    const loginForm = loginFormRef.current;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      try {
        const response = await login(username, password); 
        console.log("Login successful:", response);
        localStorage.setItem('token', response.access_token)
        localStorage.setItem('id_user', response.id_user)
        localStorage.setItem('name', response.name)
        console.log("Token added to localStorage:", response.access_token); 
        window.location.href = '/main/feed'
      } catch (error) {
        console.error("Login failed:", error.message);
      }
    };

    if (loginForm) {
      loginForm.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (loginForm) {
        loginForm.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="flex flex-col justify-start relative gap-4 bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg"
        ref={loginFormRef}
      >
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-semibold text-black">Iniciar Sesión</h1>
        </div>
        <div className="relative pt-4 mb-2">
          <input
            type="text"
            id="username"
            name="username"
            className="text-black text-lg p-2 w-full border-b-2 border-black bg-transparent outline-none placeholder-transparent focus:border-gray-700"
            placeholder="Your Username"
            required
          />
          <label
            htmlFor="username"
            className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none"
          >
            Usuario
          </label>
        </div>
        <div className="relative pt-4 mb-2">
          <input
            id="password"
            type="password"
            className="text-black text-lg p-2 w-full border-b-2 border-black bg-transparent outline-none placeholder-transparent focus:border-gray-700"
            placeholder="Your Password"
            required
          />
          <label
            htmlFor="password"
            className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none"
          >
            Contraseña
          </label>
        </div>
        <button
          type="submit"
          className="bg-black text-white font-bold py-3 w-full rounded-full mt-4 hover:bg-gray-800"
        >
          Iniciar
        </button>
        <div className="flex flex-col items-center text-black gap-4 mt-2">
          <div className="flex gap-2 justify-between w-full">
            <span>¿No tienes cuenta?</span>
            <NavLink to={"/register"} className="font-semibold hover:underline">
              Registrarse
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};