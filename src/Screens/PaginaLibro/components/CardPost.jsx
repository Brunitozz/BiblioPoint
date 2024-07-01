import defatulImg from "./../../../assets/screen-0.jpg";
import { CardComment } from "./CardComment";
import { useEffect, useRef, useState } from "react";
import { postComment } from "./../../../services/comment_service";
import { NavLink } from "react-router-dom";

const ButtonOpenDialog = ({ dialogRef }) => {
  const handleDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    } else {
      console.error("Dialog reference is null");
    }
  };
  return (
    <button
      onClick={handleDialog}
      className="p-2 rounded-lg bg-sky-300 font-semibold shadow-lg"
    >
      Responder
    </button>
  );
};

const Comentar = ({ dialogRef, idPost, onAddComment }) => {
  const [comment, setComment] = useState("");
  const [idUser, setIdUser] = useState(null)
  const [name, setName] = useState(null)

  useEffect(() => {
    const userId = localStorage.getItem("id_user")
    const name = localStorage.getItem("name")
    setIdUser(userId)
    setName(name)
  }, [])

  const handleComment = async (e) => {
    e.preventDefault();
    // id_user de localStorage y nombre
    const response = await postComment({
      id_user_comment: idUser,
      id_post: idPost,
      comment,
    });
    if (response) {
      alert("Respuesta Publicada");
      onAddComment({
        id_user_comment: idUser,
        id_post: idPost,
        comment,
        name: name,
      });
      dialogRef.current.close();
    } else {
      alert("Error al responder");
    }
  };
  return (
    <>
      <dialog
        ref={dialogRef}
        id="dialog-add-comment"
        className="w-[500px] py-4 px-12 bg-gray-300 m-auto fixed backdrop:bg-black/50 rounded-xl"
      >
        <div className="text-center text-2xl font-bold mb-4">RESPUESTA</div>
        <form onSubmit={handleComment} className="flex flex-col gap-4">
          <textarea
            onChange={({ target }) => {
              setComment(target.value);
            }}
            className="w-full outline-none rounded-lg p-2"
            name="comment"
            value={comment}
            placeholder="Agrega un comentario"
          ></textarea>
          <button
            className="p-2 rounded-lg bg-sky-300 font-bold"
            onSubmit={handleComment}
          >
            Responder
          </button>
        </form>
      </dialog>
    </>
  );
};

// id is id_post
export const CardPost = ({ id_user, content, id, name, comments, onAddComment, children = null }) => {
  const dialogRef = useRef(null);
  return (
    <>
      <section className="flex flex-col gap-4">
        <div className="w-full flex gap-4">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img src={defatulImg} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex flex-col">
                <NavLink to={`/main/perfil/${id_user}`} className="font-semibold" >{name}</NavLink>
                {children}
                <p>{content}</p>
              </div>
              <div className="flex gap-4">
                <ButtonOpenDialog dialogRef={dialogRef} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {comments.map(({ comment, id_comment, name, id_user_comment }) => (
                <CardComment
                  key={id_comment}
                  comment={comment}
                  idComment={id_comment}
                  name={name}
                  id_user={id_user_comment}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Comentar idPost={id} dialogRef={dialogRef} onAddComment={onAddComment} />
    </>
  );
};
