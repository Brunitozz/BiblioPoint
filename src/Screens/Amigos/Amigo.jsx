import React from "react";

const Amigo = ({ name, id_user, image }) => {
  const handleClick = () => {
    window.location.href = `http://localhost:5173/main/perfil?id=${id_user}`;
  };

  return (
    <div className="flex flex-col text-center items-center">
      <img
        src={image}
        alt={name}
        className="rounded-lg mb-4 h-40 w-40 object-cover cursor-pointer"
        onClick={handleClick}
      />
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default Amigo;
