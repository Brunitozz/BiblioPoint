import React from "react";
import { CardPost } from "../PaginaLibro/components/CardPost";
import { NavLink } from "react-router-dom";

export const UserPost = ({
  content,
  id_post,
  name,
  comments,
  onAddComment,
  book,
  id_book,
  id_user_post
}) => {
  return (
    <div className="mb-4">
      <CardPost
        children={<NavLink to={`/main/libros/${id_book}`} className="italic text-base text-sky-800 font-bold mb-2">Libro: {book}</NavLink>}
        content={content}
        id_user={id_user_post}
        id={id_post}
        name={name}
        comments={comments}
        onAddComment={onAddComment}
      />
    </div>
  );
};
