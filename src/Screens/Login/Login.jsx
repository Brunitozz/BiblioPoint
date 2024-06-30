import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const loginFormRef = useRef(null);

  useEffect(() => {
    const loginForm = loginFormRef.current;

    const handleSubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById("email");
      const password = document.getElementById("password");

      console.log("Email:", email.value);
      console.log("Password:", password.value);
      // process and send to API
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
            type="email"
            id="email"
            name="email"
            className="text-black text-lg p-2 w-full border-b-2 border-black bg-transparent outline-none placeholder-transparent focus:border-gray-700"
            placeholder="Your Email"
            required
          />
          <label
            htmlFor="email"
            className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none"
          >
            Usuario o Correo:
          </label>
          <svg
            className="absolute w-6 h-6 top-1/2 transform -translate-y-1/2 right-2 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
          </svg>
        </div>
        <div className="relative pt-4 mb-2">
          <input
            id="password"
            type="password"
            className="text-black text-lg p-2 w-full border-b-2 border-black bg-transparent outline-none placeholder-transparent focus:border-gray-700"
            placeholder="Your Password"
            title="Minimum 6 characters at least 1 Alphabet and 1 Number"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
            required
          />
          <label
            htmlFor="password"
            className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none"
          >
            Contraseña
          </label>
          <svg
            className="absolute w-6 h-6 top-1/2 transform -translate-y-1/2 right-2 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
          </svg>
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
