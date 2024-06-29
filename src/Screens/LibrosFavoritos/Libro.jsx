import React from "react";

const Libro = ({ name, image, author }) => {
  const handleClick = () => {
    window.location.href = "http://localhost:5173/libros"; //#TODO colocar url de la pag del libro
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
      <div className="text-gray-600">{author}</div>
    </div>
  );
};

export default Libro;
