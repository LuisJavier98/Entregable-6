
import axios from 'axios'
import { useEffect } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateAccount from './Components/CreateAccount'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProductId from './Pages/ProductId'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Purchases from './Pages/Purchases'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductId />} />
          <Route path='/createAccount' element={<CreateAccount/>} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
