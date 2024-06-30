import { useState, useEffect } from "react";
import { getFriends } from "../services/friend_service";

const useFriends = (id) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const data = await getFriends(id);
        setFriends(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, [id]);

  return { friends, loading, error };
};

export default useFriends;
