import React, { useState, useEffect } from "react";
import "../MainFeed/MainFeed.css";
import UserCard from "../UserCard/UserCard";
import Post from "../Post/Post.jsx";
import postsData from "../../Data/Post.json"; // Importa el archivo JSON


function MainContent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Carga los datos de los mocks
    setPosts(postsData);
  }, []);

  
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
