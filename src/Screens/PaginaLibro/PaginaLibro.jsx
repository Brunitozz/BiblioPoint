import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../services/useFetch'
import { CardPost } from './components/CardPost'

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

  const { url_img, id_book, name, description, author, genres } = data.data

  return (
    <>
      <div className="w-full h-[820px] p-6 flex flex-col items-center gap-6 overflow-y-scroll">
        <main className="flex gap-4 w-[1000px] h-[470px]">
          <div className="w-[300px] h-[470px] overflow-hidden rounded-lg shadow-xl">
            <img
              className="w-full h-[470px] object-fill"
              src={url_img}
              alt={'image_' + id_book}
            />
          </div>
          <div className="w-[60%] p-2 flex flex-col">
            <div className="rounded-lg text-ellipsis h-[300px] flex flex-col gap-2">
              <h1 className="text-2xl">Título: <span className="font-bold italic">{ name }</span></h1>
              <h2 className="text-xl">Autor: <span className="font-semibold">{ author.name }</span></h2>
              <p className="truncate-multiline">Sinopsis: <span>{ description }</span></p>
            </div>
            <div className="w-full">
              <h1 className="p-2 bg-sky-300 rounded-lg w-auto text-center font-bold">{genres.genre_name}</h1>
            </div>
            <div className="flex-1"></div>
            <div>
              <button
                onClick={ handleClick }
                className="border-2 p-2 px-8 bg-black text-white rounded-lg"
              >
                { like ? 'No me gusta' : 'Me gusta'}
              </button>
            </div>
          </div>
        </main>
        <main className="w-[1000px] h-full">
          <h1 className="font-semibold text-2xl">Publicaciones</h1>
          <div className="w-full flex flex-col h-auto p-6">
            <CardPost />
          </div>
        </main>
      </div>
    </>
  )
  // return (
  //   <>
  //     <div className='flex items-center justify-center'>
  //      <main className="flex gap-4 w-[1000px]">
  //       <div className="h-[500px] w-[50%px] rounded-lg bg-slate-500 overflow-hidden">
  //           <img
  //             src={url_img}
  //             className="h-[500px] w-full object-cover"
  //             alt={'image' + id_book}
  //           />
  //        </div>
  //        <div>
  //         <div className="h-[400px] w-[50%] bg-zinc-300 p-4 rounded-lg overflow-hidden flex flex-col gap-2">
  //           <h1 className="text-3xl">Título: <span className="font-bold">{name_book}</span></h1>
  //           <h1 className="text-xl">Autor: <span className="font-semibold" >{author.name}</span></h1>
  //           <p className="font-medium text-sm italic">Sinopsis: <span className="not-italic text-ellipsis">{description}</span></p>
  //         </div>
  //         <div>
  //           Generos
  //         </div>
  //        </div>
  //      </main>
  //     </div>
  //     <button
  //       onClick={ handleClick }
  //       className="border-2 p-2 px-8 bg-black text-white rounded-lg"
  //     >
  //       { like ? 'No me gusta' : 'Me gusta'}
  //     </button>
  //   </>
  // )
}
