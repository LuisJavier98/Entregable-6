import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import { useForm } from 'react-hook-form'
import Cart from './Cart'
import Filter from '../Components/Filter'
const LazyCardProduct = React.lazy(() => import('../Components/CardProduct'))
import '../App.css'
import { useContext } from 'react'
import { DataContext } from '../context/CreateContext'


const Home = () => {

  const { carActive, activateCar } = useContext(DataContext)
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [productName, setproductName] = useState('')
  const [carrito, setcarrito] = useState([])
  const [Values, setValues] = useState([0, 9999999])
  const [category, setcategory] = useState([1, 2, 3, 4])
  const productsFiltered = products?.filter(product => product.title.toLowerCase().includes(productName) && (product.price > Values[0] && product.price < Values[1]) && category.includes(product.category.id))

  const { register, formState: { errors }, watch, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    setproductName(watch('product').trim().toLowerCase())
  }, [watch('product')])


  return (
    <>
      {localStorage.getItem('token') && <Cart carActive={carActive} activateCar={activateCar} setcarrito={setcarrito} carrito={carrito} />}
      <div className='md:flex pt-10 gap-10 h-full pl-10'>
        <Filter setValues={setValues} setcategory={setcategory} />
        <div >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 '>
            <form className=' col-span-1 md:col-span-2 lg:col-span-3' onSubmit={handleSubmit(onSubmit)}>
              <input type="text" className='w-full h-12 rounded-xl' placeholder='What are you looking for?' autoComplete='off' {...register('product', { required: true })} />
            </form>
            {
              productsFiltered?.length !== 0 ?
                productsFiltered?.map(product => (
                  <Suspense fallback={
                    <div class="sk-chase">
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                      <div class="sk-chase-dot"></div>
                    </div>
                  } key={product.id}>
                    <LazyCardProduct carrito={carrito} setcarrito={setcarrito} product={product} />
                  </Suspense>

                ))
                :
                <div className='text-gray-800 text-2xl font-bold my-14'>Products not found</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home