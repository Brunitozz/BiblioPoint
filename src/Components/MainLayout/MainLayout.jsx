import { Outlet } from "react-router-dom"
import Navbar from "./../Navbar/Navbar"
import { SideBarCuenta } from './../SideBar/SideBar'

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-dvh w-dvw">
      <div className="h-[143px]">{ <Navbar /> }</div>
      <div className="h-auto flex-1 flex">
        <div className="w-[350px] border-r-2 border-black">{ <SideBarCuenta /> }</div>

        <div className="flex-1">{ <Outlet /> }</div>
        {/* <div className="w-[350px] border-l-2 border-black"></div> */}

      </div>
    </div>
  )
}