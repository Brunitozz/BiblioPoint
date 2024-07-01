import React, { useEffect, useState } from "react";
import { LinksCuenta } from "../../Data/Links";
import logo from "../../assets/Bibliopoint-Logo.png";

export const SideBarCuenta = () => {
  const [idUser, setIdUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("id_user");
    if (userId) {
      setIdUser(userId);
    }
  }, []);

  // NO mover links, es para que el navbar apunte a las direcciones del user logeado siempre
  const links = [
    {
      name: "Inicio",
      to: "/main/feed",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77"
          />
        </svg>
      ),
    },
    {
      name: "Publicar",
      to: "/publicar",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2z"
          />
          <path
            fill="currentColor"
            d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z"
          />
        </svg>
      ),
    },
    {
      name: "Libros",
      to: `/main/mis-libros/${idUser}`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M104 34H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M54 78h52v100H54Zm2-32h48a2 2 0 0 1 2 2v18H54V48a2 2 0 0 1 2-2m48 164H56a2 2 0 0 1-2-2v-18h52v18a2 2 0 0 1-2 2m125.7-15L196.51 37.16a14 14 0 0 0-16.63-10.85l-46.81 10.06A14.09 14.09 0 0 0 122.3 53l33.19 157.81a14 14 0 0 0 6.1 8.9a13.85 13.85 0 0 0 7.57 2.26a13.6 13.6 0 0 0 3-.32l46.81-10.05A14.09 14.09 0 0 0 229.7 195m-82.81-83.32l50.73-10.9l14.12 67.16L161 178.81Zm-6.63-31.56L191 69.19L195.15 89l-50.73 10.9Zm-4.66-32l46.8-10.05a2 2 0 0 1 .42 0a1.9 1.9 0 0 1 1.05.32a2 2 0 0 1 .89 1.31l3.75 17.82l-50.72 10.82l-3.74-17.78a2.07 2.07 0 0 1 1.55-2.46Zm80.81 151.8L169.6 210a1.92 1.92 0 0 1-1.47-.27a2 2 0 0 1-.89-1.31l-3.75-17.82l50.72-10.9l3.79 17.73a2.07 2.07 0 0 1-1.59 2.47Z"
          />
        </svg>
      ),
    },
    {
      name: "Amigos",
      to: `/main/amigos?id=${idUser}`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-7.5 16.6l-1.5 1.5l1.4 1.4l1.5-1.5A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 5.1 14.1l-1.4-1.4A6 6 0 0 0 12 6zm-2 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm-2 8l-2 2l1.4 1.4l2-2z"
          />
        </svg>
      ),
    },
    {
      name: "Perfil",
      to: `/main/perfil/${idUser}`,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className="fixed top-[75px] left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {links.map(({ name, to, svg }, index) => (
            <li key={index}>
              <a
                href={to}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  {svg}
                </svg>
                <span className="ml-3">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export const SideBarPerfil = () => {
  return (
    <aside
      className="fixed top-25 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {LinksPerfil.map(({ text, to, svg }, index) => (
            <li key={index}>
              <a
                href={to}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                  {svg}
                </svg>
                <span className="ml-3">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
