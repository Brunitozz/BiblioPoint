import React, { useEffect, useRef } from "react";
import { register } from "../../services/auth_service";
export const Register = () => {
  const registerFormRef = useRef(null);

  useEffect(() => {
    const registerForm = registerFormRef.current;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const name = document.getElementById("nombre").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      try {
        const response = await register(username, password, name); // Usa el servicio de registro
        console.log("Registration successful:", response);
        // Redirigir a otra página o actualizar el estado de la aplicación
        window.location.href = '/init/login'; // Ejemplo de redirección al login después del registro
      } catch (error) {
        console.error("Registration failed:", error.message);
        // Manejar errores de registro (mostrar mensajes al usuario, etc.)
      }
    };

    if (registerForm) {
      registerForm.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (registerForm) {
        registerForm.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="flex flex-col justify-start relative gap-4 bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg" ref={registerFormRef}>
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-semibold text-black">Registrarse</h1>
        </div>
        <div className="relative pt-4 mb-2">
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="text-black text-lg p-2 w-full border-b-2 border-black bg-transparent outline-none placeholder-transparent focus:border-gray-700"
            placeholder="Your Name"
            required
          />
          <label htmlFor="nombre" className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none">
            Nombre
          </label>
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
          <label htmlFor="username" className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none">
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
          <label htmlFor="password" className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none">
            Contraseña
          </label>
        </div>
        <button type="submit" className="bg-black text-white font-bold py-3 w-full rounded-full mt-4 hover:bg-gray-800">
          Registrar
        </button>
      </form>
    </div>
  );
};