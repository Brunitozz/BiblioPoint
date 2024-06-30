import { Outlet } from "react-router-dom"
import Navbar from "./../Navbar/Navbar.jsx"
import NavbarNoSearch from"../NavbarNoSearch/NavbarNoSearch.jsx"
import { NavbarOffcanvas } from "react-bootstrap"

export const NavLayout = () => {
  return (
    <>
      <NavbarNoSearch />
      <Outlet />
    </>
  )
}

