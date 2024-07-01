import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../services/useFetch";
import HeaderUser from "./Header";
import imageExample from "./icon-profile-example.jpg";
import { UserPost } from "./UserPost";

const PerfilUsuario = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");

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

  // State para almacenar los detalles del libro asociado a cada publicación
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    // Función para obtener los detalles del libro por su ID
    const fetchBookDetails = async (id_book) => {
      const BOOK_API_URL = `http://127.0.0.1:5000/book/${id_book}`;
      try {
        const response = await fetch(BOOK_API_URL);
        if (!response.ok) {
          throw new Error("Error al obtener detalles del libro");
        }
        const data = await response.json();
        // Guardar los detalles del libro en el estado
        setBookDetails((prevDetails) => ({
          ...prevDetails,
          [id_book]: data.data, // Asumiendo que `data.data` contiene los detalles del libro
        }));
      } catch (error) {
        console.error(error);
      }
    };

    // Obtener y guardar detalles del libro para cada publicación
    if (postsData?.data) {
      postsData.data.forEach((post) => {
        if (!bookDetails[post.id_book]) {
          fetchBookDetails(post.id_book);
        }
      });
    }
  }, [postsData]);

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
  const userPosts = Array.isArray(postsData?.data) ? postsData.data : [];

  return (
    <div className="w-full h-[840px] p-6 flex flex-col items-center gap-6 overflow-y-scroll">
      <div className="flex flex-col gap-6 w-full">
        <HeaderUser name={name} userId={id} image={image || imageExample} />
        <div className="text-xl font-bold">Publicaciones</div>
        {userPosts.length > 0 ? (
          userPosts.map((post, index) => (
            <UserPost
              key={index}
              content={post.content}
              id={post.id_post}
              name={name}
              comments={post.comments}
              onAddComment={() => {}} // Pasar la función onAddComment aquí si es necesario
              book={bookDetails[post.id_book]?.name || "Cargando..."}
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
