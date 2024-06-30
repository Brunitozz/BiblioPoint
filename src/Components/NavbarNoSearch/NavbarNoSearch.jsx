// src/Components/Navbar/Navbar.js
import React from 'react';
import './NavbarNoSearch.css';

export default function NavbarB() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">BiblioPoint</h1>
      <ul className="navbar-links">
        <li><a href="/main">Inicio</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Registro</a></li>
      </ul>
    </nav>
  );
}
