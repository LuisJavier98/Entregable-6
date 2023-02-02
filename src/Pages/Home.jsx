import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../Components/CardProduct'
import { getAllProducts } from '../store/slices/products.slice'
import { IoIosArrowDown } from 'react-icons/io'
import { AiFillFilter } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Cart from './Cart'


const Home = ({ carActive, activateCar }) => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [categories, setcategories] = useState()
  const [minValue, setminValue] = useState()
  const [maxValue, setmaxValue] = useState()
  const [category, setcategory] = useState()
  const [filter, setfilter] = useState(true)
  const [priceActive, setpriceActive] = useState(false)
  const [categoryActive, setcategoryActive] = useState(false)
  const [productName, setproductName] = useState('')
  const [carrito, setcarrito] = useState([])
  const productsFiltered = products?.filter(product => product.title.toLowerCase().includes(productName))

  const { register, formState: { errors }, watch, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  const activate = () => {
    setfilter(!filter)
  }

  const activatePrice = () => {
    setpriceActive(!priceActive)
  }

  const activateCategory = () => {
    setcategoryActive(!categoryActive)
  }



  useEffect(() => {
    dispatch(getAllProducts())
    URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
    axios.get(URL)
      .then(res => setcategories(res.data.data.categories))
      .catch(err => console.log(err))
  }, [])


  const dataPrice = e => {
    e.preventDefault()
    setminValue(e.target[0].value)
    setmaxValue(e.target[1].value)
    setfilter(true)
  }
  const dataCategory = e => {
    setcategory(e.target.id)
    setfilter(true)
  }

  useEffect(() => {
    setproductName(watch('product').trim().toLowerCase())
  }, [watch('product')])


  return (
    <>
      {localStorage.getItem('token') ?
        <Cart carActive={carActive} activateCar={activateCar} setcarrito={setcarrito} carrito={carrito} /> :
        ""
      }
      <div className=''>
        <div className='md:flex pt-10 gap-10 h-full pl-10'>
          <div className={filter ? 'card_filter' : 'card_filter_active'}>
            <div className='sticky top-10  h-auto'>
              {/* <div className='text_close'>
                <button className='button_close' onClick={activate}> <GrFormClose /></button>
              </div> */}
              <div className='font-black text-2xl border-b-2 border-gray-900 pb-2'>Filters</div>
              <div className='flex justify-between pt-4 pb-2'>
                <p className='font-bold text-2xl  '>Price</p>
                <button onClick={activatePrice} className={priceActive ? 'transition-all' : 'rotate-180 transition-all'}><IoIosArrowDown /></button>
              </div>
              <form onSubmit={dataPrice} className={priceActive ? 'flex gap-4 flex-wrap md:flex-col md:flex-nowrap h-auto overflow-hidden transition-height' : ' transition-height flex h-0 gap-4 flex-wrap md:flex-col overflow-hidden '}>
                <label className='flex items-center text-xl font-medium'>From</label>
                <input className='h-10' type="number" min='0' placeholder='Please, write a price' required />
                <label className='flex items-center text-xl font-medium'>To</label>
                <input className='h-10' type="number" min='0' placeholder='Please, write a price' required />
                <button className='bg-red-600 rounded-md px-5 h-10 text-xl font-medium text-white'>Filter price</button>
              </form>
              <div>
                <div className='flex pt-4 pb-4 justify-between'>
                  <p className='font-bold text-2xl '>Category</p>
                  <button onClick={activateCategory} className={categoryActive ? 'transition-all' : 'rotate-180 transition-all'}><IoIosArrowDown /></button>
                </div>
                <ul className={categoryActive ? ' h-auto list-decimal  overflow-hidden transition-height flex flex-col gap-4' : 'h-0 overflow-hidden transition-height flex flex-col gap-2'}>
                  {categories?.map(category => <li className='cursor-pointer font-medium text-xl ' onClick={dataCategory} id={category.id} key={category.id}>{category.name}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 '>
              <form className=' col-span-1 md:col-span-2 lg:col-span-3' action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className='w-full h-12 rounded-xl' placeholder='What are you looking for?' autoComplete='off' {...register('product', { required: true })} />
              </form>
              {productName.split('').length > 1 ?
                productsFiltered.length !== 0 ?
                  productsFiltered.map(product => <CardProduct key={product.name} product={product} />) : <div className='font-bold text-3xl mb-96 text-gray-700 '>Product not found</div>
                :
                products?.map(product => <CardProduct carrito={carrito} setcarrito={setcarrito} key={product.name} product={product} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home