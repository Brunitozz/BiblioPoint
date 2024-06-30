import React from "react";

export const HeaderUser = ({ name, image }) => {
  return (
    <div className=" ">
      <div className="flex flex-row flex-1 items-end">
        <div className="">
          <img
            src={image}
            alt={name}
            className="rounded-full h-40 w-40 border-gray-700 border-8"
          />
        </div>
        <div className="flex flex-col justify-end flex-1">
          <div className="">{name}</div>
        </div>
        <div className="flex flex-col justify-end text-center flex-1">
          <button className="bg-slate-600 rounded-lg">Agregar a amigos</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
