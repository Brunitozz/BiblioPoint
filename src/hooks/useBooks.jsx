import { useEffect, useState } from "react";
import { getBooks } from "../services/book_service";

export const useBooks = () => {
  const [books, setBooks] = useState([])
  const [loadingBooks, setLoadingBooks] = useState(false)
  const [errorBooks, setErrorBooks] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoadingBooks(true);
        setErrorBooks(null);
        const data = await getBooks();
        setBooks(data.data);
      } catch (error) {
        setErrorBooks(error);
      } finally {
        setLoadingBooks(false);
      }
    }
    fetchBooks();
  }, []);

  return { books, loadingBooks, errorBooks }
}
