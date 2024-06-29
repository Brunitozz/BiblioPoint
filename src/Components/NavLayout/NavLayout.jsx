import { React, useEffect } from 'react'
import { Navbar } from "../Navbar/Navbar.jsx"
import { useNavigate, Outlet } from "react-router-dom";
export const NavLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
