import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { api } from "../../constants/api";
import logo from "../../assets/Bibliopoint-Logo.png";
import { useSearch } from "../../hooks/useSearch";

export default function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const { searchs } = useSearch({ prefix: busqueda });
  const searchContainerRef = useRef(null);
  const [isSpanVisible, setIsSpanVisible] = useState(false);


  const handleBusqueda = (e) => {
    const query = e.target.value;
    setBusqueda(query);
    setIsSpanVisible(true);
  };


  const handleSugerenciaClick = (titulo) => {
    setBusqueda(titulo);
    setIsSpanVisible(false);
  };

  console.log(searchs);


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
        {isSpanVisible > 0 && (
          <ul className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-48 overflow-y-auto">
            {searchs.map((sugerencia, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center justify-between"
                onClick={() => handleSugerenciaClick(sugerencia.name)}
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
