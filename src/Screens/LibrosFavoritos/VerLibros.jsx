import React from "react";
import Libro from "./Libro";
import defaultImage from "../../icons/default-book-icon.png";

const books = [
  { name: "Libro 1", author: "Autor 1", image: defaultImage },
  { name: "Libro 2", author: "Autor 2", image: defaultImage },
  { name: "Libro 3", author: "Autor 3", image: defaultImage },
  { name: "Libro 4", author: "Autor 4", image: defaultImage },
  { name: "Libro 5", author: "Autor 5", image: defaultImage },
  { name: "Libro 6", author: "Autor 6", image: defaultImage },
];

export const Libros = () => {
  return (
    <div className="p-6">
      <p className="text-center text-2xl font-bold mb-6">Libros Favoritos</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <Libro
            key={index}
            name={book.name}
            image={book.image}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Libros;
