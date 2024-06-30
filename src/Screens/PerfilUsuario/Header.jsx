import React, { useState } from "react";
import { useParams } from "react-router-dom";

const HeaderUser = ({ name, image, userId }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleAddFriend = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const apiUrl = `http://127.0.0.1:5000/send/friends/requests`;
    const requestData = {
      id_applicant: 7, // Supongamos que obtienes esto del usuario actual
      id_receiver: userId, // Este sería el ID del usuario cuyo perfil se está mostrando
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar solicitud de amistad");
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message || "Error al enviar solicitud de amistad");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" ">
      <div className="flex flex-row flex-1 items-end">
        <div className="">
          <img
            src={image}
            alt={name}
            className="rounded-full h-40 w-40 border-gray-700 border-8"
          />
        </div>
        <div className="flex text-2xl font-bold flex-col justify-end flex-1">
          <div className="">{name}</div>
        </div>
        <div className="flex flex-col justify-end text-center flex-1">
          <button
            className="bg-slate-600 rounded-lg"
            onClick={handleAddFriend}
            disabled={loading}
          >
            {loading ? "Enviando solicitud..." : "Agregar a amigos"}
          </button>
          {error && <p>Error: {error}</p>}
          {success && <p>Solicitud enviada correctamente</p>}
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
