import { useState, useEffect } from "react";
import { getUserPosts } from "../services/post_user_service";

const useUserPosts = (userId) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      const fetchPosts = async () => {
        try {
          const data = await getUserPosts(userId);
          setPosts(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchPosts();
    } else {
      setLoading(false);
    }
  }, [userId]);

  return { posts, loading, error };
};

export default useUserPosts;
