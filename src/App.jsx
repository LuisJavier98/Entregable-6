
import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import CreateAccount from './Components/CreateAccount'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProductId from './Pages/ProductId'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Purchases from './Pages/Purchases'
import CreateContext from './context/CreateContext'


function App() {
  return (
    <CreateContext>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:id' element={<ProductId />} />
          <Route path='/createAccount' element={<CreateAccount />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/cart' element={<Cart />} />
            <Route path='/purchases' element={<Purchases />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </CreateContext>
  )
}

export default App
