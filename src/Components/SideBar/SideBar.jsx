import React from "react";
import { LinksCuenta } from "../../Data/Links";
import logo from "../../assets/Bibliopoint-Logo.png";

export const SideBarCuenta = () => {
  return (
    <aside className="fixed top-25 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <a href="https://flowbite.com/" className="flex items-center space-x-2 mb-5">
          <img src={logo} className="h-6 sm:h-7" alt="BiblioPoint Logo" />
          <span className="text-xl font-semibold whitespace-nowrap dark:text-white">BiblioPoint</span>
        </a>
        <ul className="space-y-2 font-medium">
          {LinksCuenta.map(({ text, to, svg }, index) => (
            <li key={index}>
              <a href={to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">{svg}</svg>
                <span className="ml-3">{text}</span>
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
    <aside className="fixed top-25 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <a href="/inicio" className="flex items-center space-x-2 mb-5">
          <img src={logo} className="h-6 sm:h-7" alt="BiblioPoint Logo" />
          <span className="text-xl font-semibold whitespace-nowrap dark:text-white">BiblioPoint</span>
        </a>
        <ul className="space-y-2 font-medium">
          {LinksPerfil.map(({ text, to, svg }, index) => (
            <li key={index}>
              <a href={to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">{svg}</svg>
                <span className="ml-3">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};