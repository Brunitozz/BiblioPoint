import { useState, useEffect } from "react"
import { useFetch } from "../../../services/request_friend"

export const CardAmigo = ({ id_friend, image, name, onDelete }) => {
  const [apiUrl, setApiUrl] = useState('')
  const [options, setOptions] = useState(null)
  const { data, loading, error } = useFetch(apiUrl, options)

  const handleDelete = () => {
    setApiUrl('http://127.0.0.1:5000/update/request/friends')
    setOptions({
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_friend
      })
    })
  }

  const handleAccept = () => {
    setApiUrl('http://127.0.0.1:5000/update/request/friends')
    setOptions({
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_friend
      })
    })
  }

  useEffect(() => {
    if (data) {
      onDelete(id_friend)
    }
  }, [data])

  return (
    <>
      <div className="">
        <div className="w-[170px] h-[170px] rounded-2xl overflow-hidden">
          <img
            className="object-fill"
            src={image}
            alt="image.perfil"
            />
        </div>
        <p className="indent-1 italic font-semibold text-sm">{ name }</p>
        <div className="flex items-center justify-around">
          <button
            onClick={ handleAccept }
            className="border-2 bg-gray-950 rounded-lg p-2 font-bold text-sm text-white"
          >
            Aceptar
          </button>
          <button
            onClick={ handleDelete }
            className="border-2 bg-[#C9D1D9] rounded-lg p-2 font-bold text-sm"
          >
            Rechazar
          </button>
        </div>
      </div>
    </>
  )
}