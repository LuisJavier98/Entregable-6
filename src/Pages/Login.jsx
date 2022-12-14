import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineUser } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import '../Styles/Login.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Login = (activeCar) => {
  const { handleSubmit, register, reset } = useForm()
  const navigate = useNavigate()
  const [isLogeed, setisLogeed] = useState(false)
  const submit = data => {
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, {
      "email": data.email,
      "password": data.password
    })
      .then(res => {
        navigate('/')
        localStorage.setItem('token', res.data.data.token)
        window.alert("You have sign in correctly")
      })
      .catch(err => console.log(err))
    setisLogeed(true)

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
      <div className='card_Login'>
        <Header />
        <form style={{ margin: '0px auto' }} action="">
          <h2>
            User Logged
          </h2>
          <button style={{ display: 'block', margin: '0px auto' }} onClick={handleLogout}>Logout</button>
        </form>
        <Footer className='card_footerLogin' />
      </div>
    )
  }
  else
    return (
      <div className='card_Login'>
        <Header />
        <form className='card_formLogin' action="" onSubmit={handleSubmit(submit)}>
          <label htmlFor="email">Email</label> < input re className='card_inputLogin' type="text" name="" required id="email" autoComplete='off' placeholder='Write your email' {...register('email')} />
          <label htmlFor="password">Password</label><input required type="password" className='card_paswordLogin' id='password' autoComplete='off' placeholder='Write your password' {...register('password')} />
          <button className='card_buttonLogin' >Login</button>
          <Link to='/createAccount' style={{ color: 'gray' }} >Do you still have an account?</Link>
        </form>
        <Footer className='card_footerLogin' />
      </div>
    )
}

export default Login