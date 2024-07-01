import React, { useEffect, useState } from 'react'
import { AlertIcon } from '../../icons/AlertIcon'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../../services/user_service'

const ItemInput = ({ handleChange, label, type, name, placeholder }) => {
  return (
    <label className='flex flex-col gap-1'>
      {label}
      <input
        onChange={handleChange}
        type={type}
        name={name}
        className='rounded-lg px-2 py-1'
        placeholder={placeholder}
        required
      />
    </label>
  )
}

export const EditarPerfil = () => {
  const id = localStorage.getItem('id_user')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [checked, setChecked] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') setName(value)
    if (name === 'password') setPassword(value)
    if (name === 'confirmPassword') setConfirmPassword(value)
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password === confirmPassword) {
      setChecked(true)
      const response = await updateUser({ id, name, password })
      console.log(response)
      if (response) {
        alert('Usuario Actualizado')

        //TODO: Redirigir a la página de perfil
        navigate('/')
      } else {
        alert('Error al Actualizar Usuario')
      }
    } else {
      setChecked(false)
    }
  }

  return (
    <section className='border-2 rounded-lg border-gray-300 px-4 py-6 bg-gray-300 gap-3 flex flex-col'>
      <h3 className='uppercase font-bold '>Editar Perfil</h3>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <ItemInput handleChange={handleChange} label='Nombre' type='text' name='name' placeholder='nombre' />
        <ItemInput handleChange={handleChange} label='Contraseña' type='password' name='password' placeholder='contraseña' />
        <ItemInput handleChange={handleChange} label='Confirmar Contraseña' type='password' name='confirmPassword' placeholder='contraseña' />
        <button className='bg-cyan-900 text-white w-full py-2 rounded-lg mt-4 hover:bg-cyan-700 transition-colors'>
          Guardar
        </button>
      </form>
      {
        !checked && (
          <p className='text-red-500 text-center bg-red-100 rounded-lg py-2 flex items-center justify-center gap-2'>
            <AlertIcon />
            Contraseñas No Coinciden
          </p>
        )
      }
    </section>
  )
}
