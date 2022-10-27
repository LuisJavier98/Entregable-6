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
        window.alert('Your account has created successfully')
        })
      .catch(err => console.log(err))
  }

  return (
    <div className='card_Login'>
      <Header />
      <form className='card_formLogin' action="" onSubmit={handleCreate} >
        <label htmlFor="First_Name">First Name</label> < input re className='card_inputLogin' type="text" name="" required id="First_Name" autoComplete='off' placeholder='write your first name' />
        <label htmlFor="Last_Name">Last Name</label><input required ype="text" className='card_paswordLogin' id='Last_Name' autoComplete='off'placeholder='Write your last name' />
        <label htmlFor="email">Email</label><input required type="text" className='card_paswordLogin' id='Email' autoComplete='off' placeholder='Write your email'/>
        <label htmlFor="password">Password</label><input required type="password" className='card_paswordLogin' id='password' autoComplete='off' placeholder='Write your password' />
        <label htmlFor="phone">Phone</label><input required type="text" className='card_paswordLogin' id='phone' autoComplete='off' placeholder='Write your phone(10 numbers)'  minLength='10' maxLength='10' />
        <label htmlFor="role">Role</label><input required type="text" className='card_paswordLogin' id='role' autoComplete='off' value='admin' />

        <button className='card_buttonLogin' >Create an account </button>
      </form>
      <Footer className='card_footerLogin' />
    </div>
  )
}

export default CreateAccount