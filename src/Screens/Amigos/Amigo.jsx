import React from "react";

const Amigo = ({ name, image }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="rounded-lg mb-4 h-40 w-40 object-cover"
      />
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default Amigo;
