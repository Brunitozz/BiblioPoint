import React from "react";

const Amigo = ({ name, image }) => {
  const handleClick = () => {
    window.location.href = "http://localhost:5173/amigos"; // #TODO url del perfil de amigo
  };

  return (
    <div className="text-center">
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
