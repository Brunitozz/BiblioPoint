import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"

export const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

