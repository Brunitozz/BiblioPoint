import React from 'react';
import User from '../../assets/screen-0.jpg';
function UserCard({ name, message = "1 amigo(s) en común", id_user }) {
  return (
    <main className="flex flex-col w-[170px] flex-shrink-0">
      <img src={User} alt="User" className="w-[170px] h-[170px] rounded-lg" />
      <div className="flex flex-col">
        <h3 className="font-semibold" >{name}</h3>
        <p className="text-sm italic font-medium">{ message }</p>
        <button
          className="bg-sky-400 p-2 rounded-lg font-semibold"
        >
          Agregar amigo
        </button>
      </div>
    </main>
  );
}

export default UserCard;
