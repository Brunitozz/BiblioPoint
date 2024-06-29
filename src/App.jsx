import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Screens/Login/Login.jsx";
import { Register } from "./Screens/Register/Register.jsx";
import { NavLayout } from './Components/NavLayout/NavLayout.jsx'
import { EditarPerfil } from "./Screens/EditarPerfil/EditarPerfil.jsx";
import { Publicar } from "./Screens/Publicar/Publicar.jsx";
import {SideBarCuenta,SideBarPerfil} from "./Components/SideBar/SideBar.jsx";
// Importa otros componentes según sea necesario

export const App = () => {
  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        <Routes>
          <Route path='/' element={<NavLayout />} >
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="edit-profile/:id" element={<EditarPerfil />} />
            <Route path="post" element={<Publicar />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
