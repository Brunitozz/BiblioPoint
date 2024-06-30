import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { SideBarCuenta } from "../SideBar/SideBar";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="h-[120px]">
        <Navbar />
      </div>
      <div className="h-auto flex-1 flex">
        <div className="w-64 border-r-2 border-black">
          <SideBarCuenta />
        </div>
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};