import React from 'react';
import './UserCard.css';
import User from '../../assets/User.png';
function UserCard({ name }) {
  return (
    <div className="user-card">
      <img src={User} alt="User" className="user-image" />
      <div className="user-info">
        <h3>{name}</h3>
        <button>Agregar amigo</button>
      </div>
    </div>
  );
}

export default UserCard;
