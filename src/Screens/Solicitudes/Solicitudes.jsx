import React, { useEffect, useState } from 'react'
import defaultImage from "../../assets/screen-0.jpg";
import { CardAmigo } from './components/CardAmigo';
import { useFetch } from '../../services/useFetch'


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

  return (
    <section className="p-10 flex flex-col gap-4 w-full h-full">
      <h1 className="text-3xl font-bold">Solicitudes</h1>
      <div className="grid grid-cols-4 gap-6 place-items-center w-[1000px]">
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
