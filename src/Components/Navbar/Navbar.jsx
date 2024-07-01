import React from "react";
import "./Navbar.css";
// Importa los estilos

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">BiblioPoint</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar libros, autores, etc."
        />
        <button className="search-button">Buscar</button>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/main">Inicio</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Registro</a>
        </li>
      </ul>
    </nav>
  );
}
