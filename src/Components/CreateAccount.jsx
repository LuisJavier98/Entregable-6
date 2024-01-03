import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { url } from '../Utils/getConfig'
import { useForm } from 'react-hook-form'

const CreateAccount = () => {
  const { register, handleSubmit, formState: {
    errors
  } } = useForm()
  const navigate = useNavigate()
  const handleCreate = (data) => {
    axios.post(`${url}/api/usuario`,
      {
        "nombre": data.nombre.trim(),
        "apellido": data.apellido.trim(),
        "email": data.email.trim(),
        "contraseña": data.contraseña.trim(),
        "numero": data.numero.trim(),
      })
      .then((res) => {
        toast.success(res.data.mensaje, {
          autoClose: 1500
        })
        navigate('/login')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <form className='border-2 border-black rounded-2xl shadow-2xl flex flex-col gap-4 p-6 my-4 md:my-12 mx-auto w-full md:w-2/3 ' onSubmit={handleSubmit(handleCreate)} >

        <label className='font-black text-xl' htmlFor="First_Name">First Name</label>
        < input className='h-10 rounded-xl text-xl' type="text" name="" id="First_Name" autoComplete=' off'  {...register('nombre', { required: true, pattern: /[^0-9]/ })} placeholder='Write your first name' />
        {errors?.nombre?.type=='required' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Name is required</p>}
        {errors?.nombre?.type=='pattern' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Name can not contain numbers</p>}


        <label className='font-black text-xl' htmlFor="Last_Name">Last Name</label>
        <input type="text" className='h-10 rounded-xl text-xl' id='Last_Name' autoComplete='off' {...register('apellido', { required: true, pattern: /[^0-9]/ })} placeholder='Write your last name' />
        {errors?.apellido?.type=='required' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Last Name is required</p>}
        {errors?.apellido?.type=='pattern' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Last Name can not contain numbers</p>}


        <label className='font-black text-xl' htmlFor="email">Email</label>
        <input type="text" className='h-10 rounded-xl text-xl' id='Email' autoComplete='off'  {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} placeholder='Write your email' />
        {errors?.email?.type=='required' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Email is required</p>}
        {errors?.email?.type=='pattern' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Email is not valid</p>}


        <label className='font-black text-xl' htmlFor="password">Password</label>
        <input type="password" className='h-10 rounded-xl text-xl' id='password' autoComplete='off' {...register('contraseña', { required: true })} placeholder='Write your password' />
        {errors?.contraseña?.type=='required' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Password is required</p>}


        <label className='font-black text-xl' htmlFor="phone">Phone</label>
        <input type="text" className='h-10 rounded-xl text-xl' id='phone' autoComplete='off' {...register('numero', { required: true, pattern: /[0-9]{9}/ })} placeholder='Write your phone(9 numbers)' maxLength='9' />
        {errors?.numero?.type=='required' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Number is required</p>}
        {errors?.numero?.type=='pattern' &&  <p role="alert" className='text-red-600 -mt-3 font-bold text-xl'>Number only must have contain 9 digits</p>}

        <button className='font-black text-white bg-red-600 w-2/3 md:w-1/4 mx-auto   text-lg hover:bg-red-700 md:text-xl p-2 rounded-xl mt-4 ' >Create an account </button>
      </form>
    </>
  )
}

export default CreateAccount