import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Screens/Login/Login.jsx";
import { Register } from "./Screens/Register/Register.jsx";
import { EditarPerfil } from "./Screens/EditarPerfil/EditarPerfil.jsx";
import { Publicar } from "./Screens/Publicar/Publicar.jsx";
import { Amigos } from "./Screens/Amigos/VerAmigos.jsx";
import { Libros } from "./Screens/LibrosFavoritos/VerLibros.jsx";
// Importa otros componentes según sea necesario

export const App = () => {
  return (   
      <Routes>
        <Route path="/">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="edit-profile/:id" element={<EditarPerfil />} />
          <Route path="amigos" element={<Amigos />} />
          <Route path="libros" element={<Libros />} />
          {/* NOTE: Ruta para probar el componente Publicar */}
          <Route path="post" element={<Publicar />} />
          {/* Define otras rutas según sea necesario */}
        </Route>
      </Routes>
  );
};
