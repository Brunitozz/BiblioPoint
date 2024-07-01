import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { SideBarCuenta } from "../SideBar/SideBar";

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="fixed top-0 left-0 right-0 h-[72px] z-10">
        <Navbar />
      </div>
      <div className="flex flex-1 pt-[72px]">
        <div className="fixed top-[120px] left-0 h-full w-64 border-r-2 border-black">
          <SideBarCuenta />
        </div>
        <div className="flex-1 ml-64 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
