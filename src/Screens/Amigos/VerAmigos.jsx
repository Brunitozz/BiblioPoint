import React from "react";
import { useLocation } from "react-router-dom";
import Amigo from "./Amigo";
import defaultImage from "./../../assets/screen-0.jpg";
import useFriends from "../../hooks/useFriends";

const Amigos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const { friends, loading, error } = useFriends(id);

  return (
    <div className="p-6">
      <p className="text-center text-2xl font-bold mb-6">Amigos</p>
      {loading && <div>Cargando amigos...</div>}
      {error && <div>Error al cargar amigos: {error}</div>}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {friends.length > 0 ? (
            friends.map((friend, index) => (
              <Amigo
                key={index}
                id_user={friend.id_user}
                name={friend.name}
                image={defaultImage}
              />
            ))
          ) : (
            <div className="w-screen text-gray-500">
              No hay amigos que mostrar.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Amigos;
