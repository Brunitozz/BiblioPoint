import React from "react";
import Amigo from "./Amigo";
import defaultImage from "../../icons/default-icon-profile.png";

const friends = [
  { name: "Amigo 1", image: defaultImage },
  { name: "Amigo 2", image: defaultImage },
  { name: "Amigo 3", image: defaultImage },
  { name: "Amigo 4", image: defaultImage },
  { name: "Amigo 5", image: defaultImage },
  { name: "Amigo 6", image: defaultImage },
];

export const Amigos = () => {
  return (
    <div className="p-6">
      <p className="text-center text-2xl font-bold mb-6">AMIGOS</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map((friend, index) => (
          <Amigo key={index} name={friend.name} image={friend.image} />
        ))}
      </div>
    </div>
  );
};

export default Amigos;
