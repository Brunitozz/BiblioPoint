import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../services/useFetch";
import { Libro } from "./Libro";
import defaultImage from "../../icons/default-book-icon.png";

export const Libros = () => {
  const { id } = useParams();
  const userId = id || localStorage.getItem("id_user");
  const LIKED_BOOKS_API_URL = `http://127.0.0.1:5000/liked/books?id=${userId}`;
  const {
    data: likedBooksData,
    loading,
    error,
  } = useFetch(LIKED_BOOKS_API_URL);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (likedBooksData && likedBooksData.data) {
      setBooks(likedBooksData.data);
    }
  }, [likedBooksData]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!books || books.length === 0) {
    return <div>No hay libros favoritos</div>;
  }
  console.log(books);
  return (
    <div className="p-6">
      <p className="text-center text-2xl font-bold mb-6">Libros Favoritos</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <Libro
            key={index}
            name={book.name || "Nombre no disponible"}
            image={book.url_img || defaultImage}
            id_book={book.id_book}
          />
        ))}
      </div>
    </div>
  );
};
