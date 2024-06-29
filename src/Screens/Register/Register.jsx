import React, { useEffect, useRef } from "react";
import "./Register.css";

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
    <form className="my-form" ref={registerFormRef}>
      <div className="login-welcome-row">
        <h1>Registrarse</h1>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="input__field"
          placeholder="Your Name"
          required
        />
        <label htmlFor="nombre" className="input__label">
          Nombre
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          className="input__field"
          placeholder="Your Last Name"
          required
        />
        <label htmlFor="apellidos" className="input__label">
          Apellidos
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="number"
          id="edad"
          name="edad"
          className="input__field"
          placeholder="Your Age"
          required
        />
        <label htmlFor="edad" className="input__label">
          Edad
        </label>
      </div>
      <div className="input__wrapper">
        <input
          type="email"
          id="email"
          name="email"
          className="input__field"
          placeholder="Your Email"
          required
        />
        <label htmlFor="email" className="input__label">
          Correo
        </label>
      </div>
      <div className="input__wrapper">
        <input
          id="password"
          type="password"
          className="input__field"
          placeholder="Your Password"
          title="Minimum 6 characters at least 1 Alphabet and 1 Number"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          required
        />
        <label htmlFor="password" className="input__label">
          Contraseña
        </label>
      </div>
      <button type="submit" className="my-form__button">
        Registrar
      </button>
    </form>
  );
}
