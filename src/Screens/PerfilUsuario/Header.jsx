import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HeaderUser = ({ name, image, userId }) => {
  // Obtener id_user desde localStorage
  const id_user = localStorage.getItem("id_user");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [id_applicant, setIdApplicant] = useState(id_user); // Inicializar con id_user

  useEffect(() => {
    // Actualizar id_applicant si id_user cambia en localStorage
    setIdApplicant(id_user);
  }, [id_user]);

  const handleAddFriend = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const apiUrl = `http://127.0.0.1:5000/send/friends/requests`;
    const requestData = {
      id_applicant: id_applicant, // Utilizar id_applicant del estado
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

  // Verificar si id_receiver es igual a id_applicant para ocultar el botón
  const showAddButton = id_applicant !== userId;

  return (
    <div className=" ">
      <div className="flex flex-row flex-1 gap-4 items-end">
        <section className="">
          <img
            src={image}
            alt={name}
            className="rounded-full h-40 w-40 border-gray-700 border-8"
          />
        </section>
        <div className="flex flex-col gap-14">
          <div className="flex text-2xl font-bold flex-col justify-end flex-1">
            <div className="text-4xl font-semibold">{name}</div>
          </div>
          <div className="flex flex-col items-center text-center flex-1">
            {showAddButton && (
              <button
                className="bg-slate-600 rounded-lg h-16 w-28"
                onClick={handleAddFriend}
                disabled={loading}
              >
                {loading ? "Enviando solicitud..." : "Agregar a amigos"}
              </button>
            )}
            {error && <p>Error: {error}</p>}
            {success && <p>Solicitud enviada correctamente</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
