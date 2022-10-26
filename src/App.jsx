
import axios from 'axios'
import { useEffect } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProductId from './Pages/ProductId'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Purchases from './Pages/Purchases'


function App() {

  useEffect(() => {
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    axios.post(URL,
      {
        "firstName": "Max",
        "lastName": "Rangel",
        "email": "Lu@gmail.com",
        "password": "pass1234",
        "phone": "1234567891",
        "role": "admin"
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductId />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
