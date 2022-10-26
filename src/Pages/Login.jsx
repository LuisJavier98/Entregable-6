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
      .then(res => localStorage.setItem('token', res.data.data.token))
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
      <div>
        <header className='card_header'>
        <h1 style={{
            color: '#f85555'
          }}><Link to='/'>e-commerce</Link></h1>
          <div className='buttons_routes'>
            <button className='button_user' ><NavLink to='/login'><AiOutlineUser /></NavLink  ></button>
            <button className='button_purchase'><NavLink to='/purchases'><FiArchive /></NavLink></button>
            <button className='button_car'><AiOutlineShoppingCart /></button>
          </div>
        </header>
        <h2>
          User Logged
        </h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }
  else
    return (
      <div className='card_Login'>
        <header className='card_header'>
          <h1 style={{
            color: '#f85555'
          }}><Link style={{color:'#f85555' ,textDecoration:'none'}} to='/'>e-commerce</Link></h1>
          <div className='buttons_routes'>
            <button className='button_user' ><NavLink to='/login'><AiOutlineUser /></NavLink  ></button>
            <button className='button_purchase'><NavLink to='/purchases'><FiArchive /></NavLink></button>
            <button className='button_car'><AiOutlineShoppingCart /></button>
          </div>
        </header>
        <form className='card_formLogin' action="" onSubmit={handleSubmit(submit)}>
          <label htmlFor="email">Email</label> < input re className='card_inputLogin' type="text" name="" required id="email" autoComplete='off' {...register('email')} />
          <label htmlFor="password">Password</label><input required  ype="password" className='card_paswordLogin' id='password' autoComplete='off'  {...register('password')} />
          <button className='card_buttonLogin' >Login</button>
        </form>
        <Footer className='card_footerLogin' />
      </div>
    )
}

export default Login