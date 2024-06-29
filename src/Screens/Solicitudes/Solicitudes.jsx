import React, { useEffect, useState } from 'react'
import defaultImage from "../../assets/screen-0.jpg";
import { CardAmigo } from './components/CardAmigo';
import { useFetch } from './../../services/request_friend'


export const Solicitudes = () => {
  const API_URL = 'http://127.0.0.1:5000/requests/received?id=5'
  const { data, loading, error } = useFetch(API_URL)
  const [solicitudes, setSolicitudes] = useState([])

  useEffect(() => {
    if (data) {
      setSolicitudes(data.data)
    }
  }, [data])

  const handleDelete = (id_friend) => {
    setSolicitudes((prevS) =>
      prevS.filter((s) => s.id_friend !== id_friend)
    )
  }
  
  console.log(solicitudes)

  return (
    <section className="items-center justify-center">
      <h1 className="text-2xl font-bold text-center">Solicitudes</h1>
      <div className="grid grid-cols-3 gap-6">
        {solicitudes.map(({ id_friend, user, image}) => (
          <CardAmigo
            key={id_friend}
            id_friend={id_friend}
            image={defaultImage}
            name={user.name}
            onDelete={ handleDelete }
          />
        ))}
      </div>

    </section>
  )
}
