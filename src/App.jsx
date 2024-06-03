import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./Screens/Login/Login.jsx";
import Registro from "./Screens/Register/Register.jsx";
import Navabar from "./Components/Navabar/Navabar.jsx";
// Importa otros componentes según sea necesario

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Navabar />}
      <Routes>
        <Route path ="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        {/* Define otras rutas según sea necesario */}
      </Routes>
    </>
  );
}
export default App;
