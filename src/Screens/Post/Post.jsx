import React from 'react';
import '../Post/Post.css';

function Post({ id, author, content, likes, dislikes, comments }) {
  return (
    <div className="post">
      <div className="post-header">
        <p className="post-id">ID: {id}</p>
        <p className="post-author">Autor: {author}</p>
      </div>
      <p>{content}</p>
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p><strong>{comment.author}:</strong> {comment.text}</p>
          </div>
        ))}
        <input type="text" placeholder="Agregar un comentario" />
      </div>
      <div className="post-actions">
        <button>👍 Like ({likes})</button>
        <button>👎 Dislike ({dislikes})</button>
      </div>
    </div>
  );
}

export default Post;
