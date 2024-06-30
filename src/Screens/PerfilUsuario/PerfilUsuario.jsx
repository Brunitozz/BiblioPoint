import React from "react";
import Post from "./Post";
import HeaderUser from "./Header";
import imageExample from "./icon-profile-example.jpg";

export const PerfilUsuario = () => {
  const user = { name: "Brayan Alquizar ", image: imageExample };
  const posts = [
    {
      id: 1,
      author: "Mario",
      content: "Its my Mario",
      likes: "",
      dislikes: "",
    },
    {
      id: 1,
      author: "asd",
      content: "afsafa",
      likes: "",
      dislikes: "",
    },
    {
      id: 1,
      author: "asd",
      content: "afsafa",
      likes: "",
      dislikes: "",
    },
  ];
  return (
    <div className="p-6 flex flex-1 justify-center mt-20">
      <div className=" flex flex-col gap-6 w-96">
        <HeaderUser name={user.name} image={user.image} />
        <div className=" text-xl font-bold">Publicaciones</div>
        {posts.map((post, index) => (
          <Post
            key={index}
            name={post.name}
            author={post.author}
            content={post.content}
            likes={post.likes}
            dislikes={post.dislikes}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};
export default PerfilUsuario;
