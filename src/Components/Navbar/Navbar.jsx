import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { api } from "../../constants/api";
import logo from "../../assets/Bibliopoint-Logo.png";

export default function Navbar() {
  const [libros, setLibros] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const searchContainerRef = useRef(null);

  const peticionesGet = async () => {
    try {
      const response = await axios.get(api + "/book");
      setLibros(response.data.data);
      const response2 = await axios.get(api + "/user");
      setPersonas(response2.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  const handleBusqueda = (e) => {
    const query = e.target.value;
    setBusqueda(query);
    filtrar(query);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoDeBusquedaLibros = libros.filter((libro) =>
      libro.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    const resultadoDeBusquedaPersonas = personas.filter((persona) =>
      persona.name.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      persona.username.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setSugerencias([...resultadoDeBusquedaLibros, ...resultadoDeBusquedaPersonas]);
  };

  const handleSugerenciaClick = (titulo) => {
    setBusqueda(titulo);
    setSugerencias([]);
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSugerencias([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/main/feed" className="flex items-center">
          <img src={logo} alt="BiblioPoint Logo" className="h-8 w-8 mr-2" />
          <span className="text-gray-800 text-2xl font-semibold">
            BiblioPoint
          </span>
        </a>
      </div>
      <div className="relative" ref={searchContainerRef}>
        <input
          type="text"
          className="px-4 py-2 w-96 bg-white rounded-lg"
          value={busqueda}
          placeholder="Buscar libros, autores, etc."
          onChange={handleBusqueda}
        />
        {sugerencias.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-48 overflow-y-auto">
            {sugerencias.map((sugerencia) => (
              <li
                key={sugerencia.id_book || sugerencia.id_user}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center justify-between"
                onClick={() => handleSugerenciaClick(sugerencia.name || sugerencia.username)}
              >
                <div className="flex items-center">
                  {sugerencia.url_img && (
                    <img
                      src={sugerencia.url_img}
                      alt={sugerencia.name}
                      className="w-8 h-10 inline-block mr-2"
                    />
                  )}
                  <span>{sugerencia.name || sugerencia.username}</span>
                </div>
                {sugerencia.username && (
                  <span className="text-gray-500">@{sugerencia.username}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="flex space-x-4 text-gray-800">
        <li>
          <a href="/main" className="hover:underline">
            Inicio
          </a>
        </li>
        <li>
          <a href="/login" className="hover:underline">
            Login
          </a>
        </li>
        <li>
          <a href="/register" className="hover:underline">
            Registro
          </a>
        </li>
      </ul>
    </nav>
  );
}
