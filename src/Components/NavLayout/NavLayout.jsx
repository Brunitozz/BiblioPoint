import { Outlet } from "react-router-dom"
import NavbarNoSearch from"../NavbarNoSearch/NavbarNoSearch.jsx"

export const NavLayout = () => {
  return (
    <>
      <NavbarNoSearch />
      <Outlet />
    </>
  )
}

