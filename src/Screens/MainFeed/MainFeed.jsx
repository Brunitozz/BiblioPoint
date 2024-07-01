import React, { useState, useEffect } from "react";
import "../MainFeed/MainFeed.css";
import UserCard from "../UserCard/UserCard";
import Post from "../Post/Post.jsx";
import postsData from "../../Data/Post.json"; // Importa el archivo JSON
import { getPosts } from "../../services/post_service.js";
import { useFetch } from "../../services/useFetch.js";
import { method } from "lodash";
import { CardPost } from "../PaginaLibro/components/CardPost.jsx";
import { NavLink } from "react-router-dom";

function MainContent() {
  const [posts, setPosts] = useState([])
  const [token, setToken] = useState(null)
  const FRIEND_API_URL = 'http:////127.0.0.1:5000/friends/recommended'
  const { data: recomFriend, loading, error } = useFetch(token ? FRIEND_API_URL : null, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const FRIEND_POSTS_API = 'http:////127.0.0.1:5000/post/friends'
  const { data: friendPosts, loading: loadingPosts, error: errorPosts } = useFetch(token ? FRIEND_POSTS_API : null, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
    if (recomFriend) {
    }
  }, [friendPosts]);

  return (
    <>
      <main className="pt-8 w-[100%] h-full flex flex-col gap-2 items-center">
        <section className="p-2 w-[800px] h-[280px] flex gap-4 overflow-x-scroll">
          {
            recomFriend && recomFriend.data && recomFriend.data.map(({ id_user, message, name }) => (
              <UserCard
                key={id_user}
                name={name}
                id_user={id_user}
                message={message}
              />
            ))
          }
        </section>
        <h1 className="text-2xl font-bold">Publicaciones</h1>
        <section className="flex flex-col w-[880px] h-[700px] p-4">
          {
            friendPosts && friendPosts[0] && friendPosts[0].map(({ book, id_post, content, user, comments}) => {
              comments = comments.map(({ id_comment, comment, user }) => ({ id_comment, comment, name: user.name, id_user_comment: user.id_user }))
              return (
                <CardPost
                  key={id_post}
                  id={id_post}
                  name={user.name}
                  content={content}
                  comments={comments}
                  children={<NavLink to={`/main/libros/${book.id_book}`} className="italic text-base text-sky-800 font-bold mb-2">Libro: {book.name}</NavLink>}
                />
              )
            })
          }  
        </section>
      </main>
    </>
  )

  return (
    <div className="bg-gray-200 w-full h-[820px] p-6 flex flex-col items-center gap-6 overflow-y-scroll">
      <div className="w-[800px] flex items-center justify-center">
        <div className="flex gap-2 w-full items-center justify-center">
          <UserCard name="Kiltom Adolfo" />
          <UserCard name="Bruno Pumapillo" />
          <UserCard name="Brayan Alejandro" />
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