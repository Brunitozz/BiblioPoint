import React from 'react'

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

  return (
    <>
      <div>Post Dialog</div>
      <ButtonOpenDialog />
      <dialog id='dialog-add-post' className='w-[90%] py-4 px-12 bg-gray-300 m-auto fixed backdrop:bg-black/50 rounded-xl'>
        <h3 className='text-center uppercase text-3xl my-4'>Crear Post</h3>
        <form className='flex flex-col gap-4'>
          <input type="text" placeholder='Título' className='w-full rounded-lg px-2 py-1 my-2' />
          <textarea placeholder='Contenido' className='w-full h-52 rounded-lg px-2 py-1 my-2 resize-none' />
          <div className='text-end'>
            <button className='bg-cyan-900 text-white text-end rounded-lg px-8 py-2 hover:bg-cyan-700'>Publicar</button>
          </div>
        </form>
      </dialog>
    </>
  )
}
