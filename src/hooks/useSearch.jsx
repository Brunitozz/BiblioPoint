import { useEffect, useState } from "react"
import { postSearch } from "../services/search_service"

const dijkstra = (graph, startNode) => {
  const distances = {};
  const visited = {};
  const previous = {};

  for (let node in graph) {
    distances[node] = Infinity;
    visited[node] = false;
  }
  distances[startNode] = 0;

  const getClosestNode = () => {
    let minDistance = Infinity;
    let closestNode = null;

    for (let node in distances) {
      if (!visited[node] && distances[node] < minDistance) {
        minDistance = distances[node];
        closestNode = node;
      }
    }
    return closestNode;
  }

  let currentNode = getClosestNode();

  while (currentNode) {
    let distance = distances[currentNode];
    let neighbors = graph[currentNode];

    for (let neighbor in neighbors) {
      let newDist = distance + neighbors[neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = currentNode;
      }
    }
    visited[currentNode] = true;
    currentNode = getClosestNode();
  }
  return { distances, previous };
}

export const useSearch = ({ prefix }) => {
  const [searchs, setSearchs] = useState([])
  const [booksSearch, setBooksSearch] = useState(null)
  const [usersSearch, setUsersSearch] = useState(null)
  const [shortestPath, setShortestPath] = useState(null)

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const data = await postSearch(prefix);
        setSearchs(data.message);
        const searchBooks = data.message.filter(book => book.id_book);
        const searchUsers = data.message.filter(user => user.id_user);
        setBooksSearch(searchBooks);
        setUsersSearch(searchUsers);

        if (data.graph) {
          const result = dijkstra(data.graph, "startNodeId"); // Reemplaza "startNodeId" con el nodo inicial deseado
          setShortestPath(result);
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchSearch();
  }, [prefix])

  return { searchs, booksSearch, usersSearch, shortestPath }
}