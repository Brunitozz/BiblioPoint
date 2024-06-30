import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../services/useFetch";
import { CardPost } from "../PaginaLibro/components/CardPost";
import HeaderUser from "./Header";
import imageExample from "./icon-profile-example.jpg";

const PerfilUsuario = () => {
  const { id } = useParams();
  console.log(id);
  const USER_API_URL = `http://127.0.0.1:5000/user/${id}`;
  const POSTS_API_URL = `http://127.0.0.1:5000/posts/user?id=${id}`;

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useFetch(USER_API_URL);
  const {
    data: postsData,
    loading: postsLoading,
    error: postsError,
  } = useFetch(POSTS_API_URL);

  if (userLoading || postsLoading) {
    return <div>Loading...</div>;
  }

  if (userError || postsError) {
    return <div>Error: {userError || postsError}</div>;
  }

  if (!userData || !userData.data) {
    return <div>No user found</div>;
  }

  const { name, image } = userData.data;
  console.log(userData);
  const userPosts = Array.isArray(postsData?.data) ? postsData.data : [];
  console.log(userPosts);

  return (
    <div className="w-full h-[840px] p-6 flex flex-col items-center gap-6 overflow-y-scroll">
      <div className="flex flex-col gap-6 w-full">
        <HeaderUser name={name} userId={id} image={image || imageExample} />
        <div className="text-xl font-bold">Publicaciones</div>
        {userPosts.length > 0 ? (
          userPosts.map((post, index) => (
            <CardPost
              key={index}
              content={post.content}
              id={post.id_post}
              name={name}
              comments={post.comments}
            />
          ))
        ) : (
          <div>No hay posts disponibles</div>
        )}
      </div>
    </div>
  );
};

export default PerfilUsuario;
