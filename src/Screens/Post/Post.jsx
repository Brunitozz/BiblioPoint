import React, { useState } from 'react';
import '../Post/Post.css';

function Post({ id, author, content, likes, dislikes, comments }) {
  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [
        ...commentList,
        { author: 'Tú', text: newComment }
      ];
      setCommentList(updatedComments);
      setNewComment('');
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <p className="post-id">ID: {id}</p>
        <p className="post-author">Autor: {author}</p>
      </div>
      <p>{content}</p>
      <div className="comments">
        {commentList.map((comment, index) => (
          <div key={index} className="comment">
            <p><strong>{comment.author}:</strong> {comment.text}</p>
          </div>
        ))}
        <div className="comment-input-container">
          <input
            type="text"
            placeholder="Agregar un comentario"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button className="comment-button" onClick={handleAddComment}>Comentar</button>
        </div>
      </div>
      <div className="post-actions">
        <button>👍 Like ({likes})</button>
        <button>👎 Dislike ({dislikes})</button>
      </div>
    </div>
  );
}

export default Post;
