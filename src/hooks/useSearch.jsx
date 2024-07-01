import { useEffect, useState } from "react"
import { postSearch } from "../services/search_service"

export const useSearch = ({ prefix }) => {
  const [searchs, setSearchs] = useState([])
  const [booksSearch, setBooksSearch] = useState(null)
  const [usersSearch, setUsersSearch] = useState(null)

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const data = await postSearch(prefix);
        setSearchs(data.message);
        const searchBooks = data.message.filter(book => book.id_book);
        const searchUsers = data.message.filter(user => user.id_user);
        setBooksSearch(searchBooks);
        setUsersSearch(searchUsers);
      } catch (error) {
        console.error(error)
      }
    }
    fetchSearch();
  }, [prefix])

  return { searchs, booksSearch, usersSearch }
}
