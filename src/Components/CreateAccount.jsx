import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateAccount = () => {
  const navigate = useNavigate()
  const handleCreate = e => {
    e.preventDefault()
    const url = 'https://e-commerce-api.academlo.tech/api/v1/users'
    axios.post(url,
      {
        "firstName": e.target[0].value,
        "lastName": e.target[1].value,
        "email": e.target[2].value,
        "password": e.target[3].value,
        "phone": e.target[4].value,
        "role": "admin"
      })
      .then(res => {
        console.log(res.data)
        window.alert('Your account has created successfully')
        navigate('/Login')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <form className='border-2 border-black rounded-2xl shadow-2xl flex flex-col gap-4 p-6 my-4 md:my-12 mx-auto w-full md:w-2/3 ' onSubmit={handleCreate} >
        <label className='font-black text-xl' htmlFor="First_Name">First Name</label>
        < input className='h-10 rounded-xl text-xl' type="text" name="" required id="First_Name" autoComplete=' off' placeholder='Write your first name' />
        <label className='font-black text-xl' htmlFor="Last_Name">Last Name</label>
        <input required ype="text" className='h-10 rounded-xl text-xl' id='Last_Name' autoComplete='off' placeholder='Write your last name' />
        <label className='font-black text-xl' htmlFor="email">Email</label>
        <input required type="text" className='h-10 rounded-xl text-xl' id='Email' autoComplete='off' placeholder='Write your email' />
        <label className='font-black text-xl' htmlFor="password">Password</label>
        <input required type="password" className='h-10 rounded-xl text-xl' id='password' autoComplete='off' placeholder='Write your password' />
        <label className='font-black text-xl' htmlFor="phone">Phone</label>
        <input required type="text" className='h-10 rounded-xl text-xl' id='phone' autoComplete='off' placeholder='Write your phone(10 numbers)' minLength='10' maxLength='10' />
        <button className='font-black text-white bg-red-600 w-2/3 md:w-1/4 mx-auto   text-lg hover:bg-red-700 md:text-xl p-2 rounded-xl mt-4 ' >Create an account </button>
      </form>
    </>
  )
}

export default CreateAccount