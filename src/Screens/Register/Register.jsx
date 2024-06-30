import React, { useEffect, useRef } from "react";

export const Register = () => {
  const registerFormRef = useRef(null);

  useEffect(() => {
    const registerForm = registerFormRef.current;

    const handleSubmit = (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre");
      const apellidos = document.getElementById("apellidos");
      const edad = document.getElementById("edad");
      const email = document.getElementById("email");
      const password = document.getElementById("password");

      console.log("Nombre:", nombre.value);
      console.log("Apellidos:", apellidos.value);
      console.log("Edad:", edad.value);
      console.log("Email:", email.value);
      console.log("Password:", password.value);
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
            id="apellidos"
            name="apellidos"
            className="text-black text-lg p-2 w-full border-b-2 border-black bg-transparent outline-none placeholder-transparent focus:border-gray-700"
            placeholder="Your Last Name"
            required
          />
          <label htmlFor="apellidos" className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none">
            Apellidos
          </label>
        </div>
        <div className="relative pt-4 mb-2">
          <input
            type="number"
            id="edad"
            name="edad"
            className="text-black text-lg p-2 w-full border-b-2 border-black bg-transparent outline-none placeholder-transparent focus:border-gray-700"
            placeholder="Your Age"
            required
          />
          <label htmlFor="edad" className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none">
            Edad
          </label>
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
          <label htmlFor="email" className="absolute top-2 left-2 text-black transition-all duration-300 pointer-events-none">
            Correo
          </label>
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
