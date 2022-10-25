
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import ProductId from './Pages/ProductId'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Purchases from './Pages/Purchases'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductId/>} /> 
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
