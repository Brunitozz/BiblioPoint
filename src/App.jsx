import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login/Login.jsx';
// Importa otros componentes según sea necesario

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Define otras rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;