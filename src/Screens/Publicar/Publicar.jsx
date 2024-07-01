import React, { useCallback, useEffect, useState } from 'react'
import { postPost } from '../../services/post_service'
import { useSearch } from '../../hooks/useSearch'

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

  const handleClosePost = () => {
    const dialog = document.getElementById('dialog-add-post')
    dialog.close()
  }

  return (
    <>
      <dialog id='dialog-add-post' className='w-[90%] py-4 px-12 bg-gray-300 m-auto fixed backdrop:bg-black/50 rounded-xl'>
        <span
          className='absolute right-5 text-2xl hover:scale-110 hover:text-zinc-700 cursor-pointer'
          onClick={handleClosePost}
        >x</span>
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
