import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const CreateAccount = () => {
const navigate = useNavigate()
  const handleCreate = e => {
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    axios.post(URL,
      {
        "firstName": e.target[0].value,
        "lastName": e.target[1].value,
        "email": e.target[2].value,
        "password": e.target[3].value,
        "phone": e.target[4].value,
        "role": e.target[5].value
      })
      .then(res => {
        console.log(res.data)
        navigate('/Login')
        })
      .catch(err => console.log(err))
  }

  return (
    <div className='card_Login'>
      <Header />
      <form className='card_formLogin' action="" onSubmit={handleCreate} >
        <label htmlFor="First_Name">First Name</label> < input re className='card_inputLogin' type="text" name="" required id="First_Name" autoComplete='off' />
        <label htmlFor="Last_Name">Last Name</label><input required ype="text" className='card_paswordLogin' id='Last_Name' autoComplete='off' />
        <label htmlFor="email">Email</label><input required ype="text" className='card_paswordLogin' id='Email' autoComplete='off' />
        <label htmlFor="password">Password</label><input required ype="password" className='card_paswordLogin' id='password' autoComplete='off' />
        <label htmlFor="phone">Phone(10 numbers)</label><input required ype="text" className='card_paswordLogin' id='phone' autoComplete='off' />
        <label htmlFor="role">Role</label><input required ype="text" className='card_paswordLogin' id='role' autoComplete='off' />

        <button className='card_buttonLogin' >Create an account </button>
      </form>
      <Footer className='card_footerLogin' />
    </div>
  )
}

export default CreateAccount