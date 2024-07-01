import React from "react";
import { CardPost } from "../PaginaLibro/components/CardPost";

export const UserPost = ({
  content,
  id,
  name,
  comments,
  onAddComment,
  book,
}) => {
  return (
    <div className="mb-4">
      {" "}
      <div className="text-lg font-bold mb-2">Libro: {book}</div>{" "}
      <CardPost
        content={content}
        id={id}
        name={name}
        comments={comments}
        onAddComment={onAddComment}
      />
    </div>
  );
};
