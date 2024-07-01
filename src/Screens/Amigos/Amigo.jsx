import React from "react";
import { NavLink } from "react-router-dom";

const Amigo = ({ name, id_user, image }) => {
  return (
    <NavLink
      to={`/main/perfil/${id_user}`}
      className="flex flex-col text-center items-center"
    >
      <img
        src={image}
        alt={name}
        className="rounded-lg mb-4 h-40 w-40 object-cover cursor-pointer shadow-xl"
      />
      <div className="font-semibold">{name}</div>
    </NavLink>
  );
};

export default Amigo;
