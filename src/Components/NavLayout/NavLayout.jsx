import { Outlet } from "react-router-dom"
import { Navbar } from '../Navbar/Navbar.jsx'

export const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
