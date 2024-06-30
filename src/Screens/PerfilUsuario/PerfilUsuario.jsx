import React from "react";
import { useLocation } from "react-router-dom";
import Post from "./Post";
import HeaderUser from "./Header";
import imageExample from "./icon-profile-example.jpg";
import useUserPosts from "../../hooks/usePostsUser";
import useUser from "../../hooks/useUserInfo";

export const PerfilUsuario = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");

  const { user, loading: loadingUser, error: errorUser } = useUser(userId);
  const {
    posts,
    loading: loadingPosts,
    error: errorPosts,
  } = useUserPosts(userId);

  const User = user?.data;
  const Posts = Array.isArray(posts?.data) ? posts.data : [];

  if (loadingUser || loadingPosts) {
    return <div>Loading...</div>;
  }

  if (errorUser || errorPosts) {
    return <div>Error: {errorUser || errorPosts}</div>;
  }

  if (!User) {
    return <div>No user found</div>;
  }

  return (
    <div className="p-6 flex flex-1 justify-center mt-48">
      <div className="flex flex-col gap-6 w-96">
        <HeaderUser name={User.name} image={User.image || imageExample} />
        <div className="text-xl font-bold">Publicaciones</div>
        {Posts.length > 0 ? (
          Posts.map((post, index) => (
            <Post
              key={index}
              id={post.id_post}
              author={post.id_user_post}
              content={post.content}
              likes={post.likes || 0}
              dislikes={post.dislikes || 0}
            />
          ))
        ) : (
          <div>No posts available</div>
        )}
      </div>
    </div>
  );
};

export default PerfilUsuario;
