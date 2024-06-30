import React, { useState, useEffect } from "react";
import "../MainFeed/MainFeed.css";
import UserCard from "../UserCard/UserCard";
import Post from "../Post/Post.jsx";
import postsData from "../../Data/Post.json"; // Importa el archivo JSON
import { getPosts } from "../../services/post_service.js";

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token'); // Lee el token desde localStorage

      if (!token) {
        setError("No token found, please log in.");
        return;
      }

      try {
        const data = await getPosts(token); // Usa el servicio de posts
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full h-[820px] flex-wrap p-6 flex flex-col items-center gap-6 overflow-y-scroll">
      <div className="main-content">
        <div className="recommended-friends">
          <UserCard name="John Doe" />
          <UserCard name="Jane Smith" />
          <UserCard name="Alice Johnson" />
          <UserCard name="Bob Brown" />
          <UserCard name="Bob Brown" />
          <UserCard name="Bob Brown" />
        </div>
        <div className="posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              likes={post.likes}
              dislikes={post.dislikes}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;