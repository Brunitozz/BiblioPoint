import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Screens/Login/Login.jsx";
import { Register } from "./Screens/Register/Register.jsx";
import { NavLayout } from './Components/NavLayout/NavLayout.jsx'
// Importa otros componentes según sea necesario

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <NavLayout /> } >
          <Route path ="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* Define otras rutas según sea necesario */}
        </Route>
      </Routes>
    </>
  );
}
