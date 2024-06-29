import React from "react";
import { LinksCuenta, LinksPerfil } from "../../Data/Links";
import logo from "../../assets/Bibliopoint-Logo.png";
import { Link } from "react-router-dom";

export const SideBarCuenta = () => {
  return (
    <div>
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
            <img src={logo} className="h-6 me-3 sm:h-7" alt="BiblioPoint Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BiblioPoint</span>
          </a>
          <ul className="space-y-2 font-medium">
            {LinksCuenta.map(({ text, to, svg }) =>
              <li>
                <a href={to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> {svg} </svg>
                  <span className="ms-3">
                    {text}
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>

    </div>

    // <div className="w-1/4 bg-gray-100 h-screen p-4">
    //   <div className="mb-4">
    //     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 16 16">
    //       <path fill="currentColor" d="M0 1h16v2H0zm0 4h16v2H0zm0 4h16v2H0zm0 4h16v2H0z" />
    //     </svg>
    //   </div>
    //   <div>
    //     {LinksCuenta.map((link, index) => (
    //       <p key={index} className="py-2 border-b border-gray-300">{link.text}</p>
    //     ))}
    //   </div>
    // </div>
  );
}

export const SideBarPerfil = () => {
  return (
    <div>
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="/inicio" className="flex items-center ps-2.5 mb-5">
            <img src={logo} className="h-6 me-3 sm:h-7" alt="BiblioPoint Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BiblioPoint</span>
          </a>
          <ul className="space-y-2 font-medium">
            {LinksPerfil.map(({ text, to, svg }) =>
              <li>
                <a href={to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> {svg} </svg>
                  <span className="ms-3">
                    {text}
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>

    </div>

    // <div className="w-1/4 bg-gray-100 h-screen p-4">
    //   <div className="mb-4">
    //     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 16 16">
    //       <path fill="currentColor" d="M0 1h16v2H0zm0 4h16v2H0zm0 4h16v2H0zm0 4h16v2H0z" />
    //     </svg>
    //   </div>
    //   <div>
    //     {LinksCuenta.map((link, index) => (
    //       <p key={index} className="py-2 border-b border-gray-300">{link.text}</p>
    //     ))}
    //   </div>
    // </div>
  );
}