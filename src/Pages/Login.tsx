import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { url } from '../Utils/getConfig.Js'
import { toast } from 'react-toastify'

interface FormData {
  email: string,
  password: string
}

const Login = () => {
  const { handleSubmit, register, formState: { errors }, } = useForm<FormData>()
  const navigate = useNavigate()
  const [isLogeed, setisLogeed] = useState<boolean>(false)
  const submit: SubmitHandler<FormData> = (data) => {
    axios.post(`${url}/api/usuario/login`, {
      "email": data.email,
      "contraseña": data.password
    })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        toast.success("Has ingresado correctamente")
        navigate('/')
        setisLogeed(true)
      })
      .catch(err => toast.error(err.response.data.mensaje))
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
        <input className='h-12 text-xl rounded-xl' type="text" id="email" placeholder='Write your email' {...register('email', { required: true,pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
        {errors.email?.type === "required" && (
          <p role="alert" className='text-red-600 font-bold text-xl'>Email is required</p>
        )}
        {errors.email?.type === "pattern" && (
          <p role="alert" className='text-red-600 font-bold text-xl'>Email is not valid</p>
        )}
        <label className='text-xl font-black mt-5' htmlFor="password">Password</label>
        <input type="password" className='h-12 text-xl rounded-xl' id='password' autoComplete='off' placeholder='Write your password' {...register('password', { required: true })} />
        {errors.password?.type === "required" && (
          <p role="alert" className='text-red-600 font-bold text-xl'>Password is required</p>
        )}
        <button className='border-2 font-bold text-white text-xl bg-red-600 p-4 my-4 w-2/3 md:w-1/5 rounded-xl hover:bg-red-700 mx-auto '>Login</button>
        <Link to='/createAccount' className='text-center mx-auto font-bold text-xl text-gray-600' >Do not you still have an account?</Link>
      </form>
    )
}

export default Login