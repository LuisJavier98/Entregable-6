
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateContext from './context/CreateContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, lazy } from 'react'

const ProtectedRoutes =lazy(()=>import('./Pages/ProtectedRoutes')) 
const CreateAccount = lazy(() => import('./Components/CreateAccount'))
const Header = lazy(() => import('./Components/Header'))
const Footer = lazy(() => import('./Components/Footer'))
const Cart = lazy(() => import('./Pages/Cart'))
const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const ProductId = lazy(() => import('./Pages/ProductId'))
const Purchases = lazy(() => import('./Pages/Purchases'))


function App() {


  return (
    <CreateContext>
      <Suspense fallback={<div className="flex justify-center items-center h-screen bg-white">
        <div className="loader border-t-4 border-white border-t-red-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>} >
        <ToastContainer autoClose={500} />
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
      </Suspense>
    </CreateContext >
  )
}

export default App
