import React, { useCallback, useEffect, useState } from 'react'
import { useBooks } from '../../hooks/useBooks'
import { postPost } from '../../services/post_service'
import { api } from '../../constants/api'
import { useSearch } from '../../hooks/useSearch'

const ButtonOpenDialog = () => {
  const handleDialog = () => {
    const dialog = document.getElementById('dialog-add-post')
    dialog.showModal()
  }

  return (
    <button onClick={handleDialog} className='fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-800'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  )
}



export const Publicar = () => {
  const [search, setSearch] = useState('')
  const { booksSearch } = useSearch({ prefix: search })
  const [content, setContent] = useState('')
  const [selectIdBook, setSelectIdBook] = useState('')
  const [isSpanVisible, setIsSpanVisible] = useState(false)

  const id = localStorage.getItem('id_user')

  const handleChange = useCallback(async (e) => {
    const { name, value } = e.target;
    if (name === 'search') {
      setSearch(value);
      setIsSpanVisible(true);
    }
    if (name === 'content') setContent(value);
  }, [search]);


  const handleSelectBook = useCallback((book) => {
    setSelectIdBook(book.id_book);
    setSearch(book.name);
    setIsSpanVisible(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    {/*NOTE: falta el id del id del user*/ }
    const response = await postPost({ id_user_post: id, id_book: selectIdBook, content });
    if (response) {
      alert('Post Creado')
    } else {
      alert('Error al crear el post')
    }

    setSearch('')
    setContent('')

    const dialog = document.getElementById('dialog-add-post')
    dialog.close()
  }

  return (
    <>
      <div>Post Dialog</div>
      <ButtonOpenDialog />
      <dialog id='dialog-add-post' className='w-[90%] py-4 px-12 bg-gray-300 m-auto fixed backdrop:bg-black/50 rounded-xl'>
        <h3 className='text-center uppercase text-3xl my-4'>Crear Post</h3>
        <form className='flex flex-col gap-4 relative' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name='search'
            type="text"
            placeholder='Buscar libro...'
            className='w-full rounded-lg px-2 py-1 my-2'
            required
          />
          {isSpanVisible && (
            <span className='absolute w-full top-12 bg-gray-200 h-36 overflow-y-scroll border-2 border-gray-400 rounded-lg'>
              {booksSearch.map(book => (
                <button
                  type='button'
                  key={book.id_book}
                  onClick={() => handleSelectBook(book)}
                  className='w-full px-2 py-1 hover:bg-gray-300'
                >
                  {book.name}
                </button>
              ))}
            </span>
          )}

          <textarea
            onChange={handleChange}
            value={content}
            name='content'
            placeholder='Contenido'
            className='w-full h-52 rounded-lg px-2 py-1 my-2 resize-none'
            required
          />
          <div className='text-end'>
            <button className='bg-cyan-900 text-white text-end rounded-lg px-8 py-2 hover:bg-cyan-700'>Publicar</button>
          </div>
        </form>
      </dialog>
    </>
  )
}
