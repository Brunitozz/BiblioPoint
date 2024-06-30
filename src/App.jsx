import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Screens/Login/Login.jsx";
import { Register } from "./Screens/Register/Register.jsx";
import { EditarPerfil } from "./Screens/EditarPerfil/EditarPerfil.jsx";
import { Publicar } from "./Screens/Publicar/Publicar.jsx";
import { Amigos } from "./Screens/Amigos/VerAmigos.jsx";
import { Libros } from "./Screens/LibrosFavoritos/VerLibros.jsx";
import MainFeed from "./Screens/MainFeed/MainFeed.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Solicitudes  } from "./Screens/Solicitudes/Solicitudes.jsx";
import { PaginaLibro } from "./Screens/PaginaLibro/PaginaLibro.jsx"
import { MainLayout } from "./Components/MainLayout/MainLayout.jsx";
import { NavLayout } from "./Components/NavLayout/NavLayout.jsx";
// Importa otros componentes según sea necesario

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainLayout />}>
          <Route path="solicitudes" element={<Solicitudes />} />
          <Route path="libros/:idBook" element={<PaginaLibro />} />
        </Route>
        <Route path="/init" element={ <NavLayout />}>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
      </Routes>
    </>
  );
};
