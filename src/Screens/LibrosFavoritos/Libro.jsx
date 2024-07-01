import React from "react";

export const Libro = ({ name, image, id_book }) => {
  const handleClick = () => {
    window.location.href = `http://localhost:5173/main/libros/${id_book}`;
  };

  return (
    <div className="text-center flex flex-col items-center justify-center">
      <img
        src={image}
        alt={name}
        className="rounded-lg mb-4 h-50 w-40 object-cover cursor-pointer"
        onClick={handleClick}
      />
      <div className="font-semibold">{name}</div>
    </div>
  );
};
