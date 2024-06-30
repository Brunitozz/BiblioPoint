import React from "react";
import { useLocation } from "react-router-dom";
import Amigo from "./Amigo";
import defaultImage from "../../icons/default-icon-profile.png";
import useFriends from "../../hooks/useFriends";

const Amigos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const { friends, loading, error } = useFriends(id);

  return (
    <div className="p-6">
      <p className="text-center text-2xl font-bold mb-6">Amigos</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {friends.map((friend, index) => (
          <Amigo
            key={index}
            id_user={friend.id_user}
            name={friend.name}
            image={defaultImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Amigos;
