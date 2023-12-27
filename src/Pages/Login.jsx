import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { url } from '../Utils/getConfig'


const Login = ({ activeCar }) => {
  const { handleSubmit, register } = useForm()
  const navigate = useNavigate()
  const [isLogeed, setisLogeed] = useState(false)
  const submit = data => {
    axios.post(`${url}/api/usuario/login`, {
      "email": data.email,
      "contraseña": data.password
    })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        // window.alert("You have sign in correctly")
        navigate('/')
        setisLogeed(true)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (localStorage.getItem('token')) { setisLogeed(true) }
    else { setisLogeed(false) }
  }, [])


  const handleLogout = () => {
    localStorage.removeItem('token')
    setisLogeed(false)
  }



  if (isLogeed) {
    return (
      <form className='py-10 border-2 border-black rounded-2xl shadow-2xl  flex flex-col items-center mx-auto w-full md:w-3/4 my-60 gap-4'>
        <h2 className='text-4xl font-black'>
          User Logged
        </h2>
        <button onClick={handleLogout} className='bg-red-600 hover:bg-red-700 p-4 rounded-xl font-bold text-white'>Logout</button>
      </form>
    )
  }
  else
    return (
      <form className='flex flex-col my-36 md:w-2/3 md:m-auto md:my-40 border-2 border-black p-6 rounded-2xl shadow-2xl py-10' action="" onSubmit={handleSubmit(submit)}>
        <label className='text-xl font-black' htmlFor="email">Email</label>
        < input className='h-12 text-xl rounded-xl' type="text" name="" required id="email" autoComplete='off' placeholder='Write your email' {...register('email')} />
        <label className='text-xl font-black mt-5' htmlFor="password">Password</label>
        <input required type="password" className='h-12 text-xl rounded-xl' id='password' autoComplete='off' placeholder='Write your password' {...register('password')} />
        <button className='border-2 font-bold text-white text-xl bg-red-600 p-4 my-4 w-2/3 md:w-1/5 rounded-xl hover:bg-red-700 mx-auto '>Login</button>
        <Link to='/createAccount' className='text-center mx-auto font-bold text-xl text-gray-600' >Do not you still have an account?</Link>
      </form>

    )
}

export default Login