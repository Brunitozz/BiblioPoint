import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../services/useFetch'

export const PaginaLibro = () => {
  const { idBook } = useParams()
  const API_URL = `http://127.0.0.1:5000/book/${idBook}`
  const { data, loading, error } = useFetch(API_URL)
  const [like, setLike] = useState(false)

  const handleClick = async () => {
    const apiUrl = like ? 'http://127.0.0.1:5000/unlike/book' : 'http://127.0.0.1:5000/like/book'
    const options = {
      method: like ? 'DELETE' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_book: idBook,
        id_user: 18
      })
    }

    try {
      const response = await fetch(apiUrl, options)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
    } catch (error) {
      console.error(error)
    }
    setLike(!like)
  }

  if (loading) {
    return <div>Cargando</div>
  }

  const { url_img, id_book, name_book, name_author, description, author } = data.data

  return (
    <>
      <div className='flex items-center justify-center'>
       <main className="flex gap-4 w-[1000px]">
         <div className="h-[500px] w-[40%px] rounded-lg bg-slate-500 overflow-hidden">
           <img
             src={url_img}
             className="h-[500px] w-full object-cover"
             alt={'image' + id_book}
           />
         </div>
         <div className="h-[400px] w-[60%] bg-zinc-300 p-4 rounded-lg overflow-hidden flex flex-col gap-2">
           <h1 className="text-3xl">Título: <span className="font-bold">{name_book}</span></h1>
           <h1 className="text-xl">Autor: <span className="font-semibold" >{name_author}</span></h1>
           <p className="font-medium text-sm italic">Sinopsis: <span className="not-italic text-ellipsis">{description}</span></p>
         </div>
       </main>
      </div>
      <button
        onClick={ handleClick }
        className="border-2 p-2 px-8 bg-black text-white rounded-lg"
      >
        { like ? 'No me gusta' : 'Me gusta'}
      </button>
    </>
  )
}
