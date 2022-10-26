import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../Components/CardProduct'
import { getAllProducts } from '../store/slices/products.slice'
import '../Styles/Home.css'
import { IoIosArrowDown } from 'react-icons/io'
import { AiFillFilter } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import Cart from './Cart'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const Home = () => {
  const navigate = useNavigate()
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [categories, setcategories] = useState()
  const [minValue, setminValue] = useState()
  const [maxValue, setmaxValue] = useState()
  const [category, setcategory] = useState()
  const [filter, setfilter] = useState(true)
  const [priceActive, setpriceActive] = useState(false)
  const [carActive, setcarActive] = useState(true)
  const [categoryActive, setcategoryActive] = useState(false)
  const [productName, setproductName] = useState()
  const [number, setnumber] = useState()

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

  const activateCar = () => {
    if (localStorage.getItem('token')) { setcarActive(!carActive) }
    else { navigate('/Login') }
  }


  useEffect(() => {
    dispatch(getAllProducts())
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
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
    <div className='card_home'>
      <Header activateCar={activateCar} />
      <div className='card_bodyHome'>
        {localStorage.getItem('token') ?
          <Cart carActive={carActive} number={number} /> :
          ""
        }
        <div className='card_body'>
          <div className={filter ? 'card_filter' : 'card_filter_active'}>
            <div className='card_fixed'>
              <div className='text_close'>
                <button className='button_close' onClick={activate}> <GrFormClose /></button>
              </div>
              <div className='text_filter'><strong>Filters</strong></div>
              <div className='card_separate'>
                <p><strong>Price</strong></p>
                <button onClick={activatePrice} className={priceActive ? 'card_down' : 'card_up'}><IoIosArrowDown /></button>
              </div>
              <form action="" onSubmit={dataPrice} className={priceActive ? 'form_price' : 'form_price_inactive'}>
                <label htmlFor="">From</label>
                <input type="number" min='0' placeholder='Please, write a price' required />
                <label htmlFor="">To</label>
                <input type="number" min='0' placeholder='Please, write a price' required />
                <button className='button_filter'>Filter price</button>
              </form>
              <div className='card_category'>
                <div className='card_separate'>
                  <p><strong>Category</strong></p>
                  <button onClick={activateCategory} className={categoryActive ? 'card_down' : 'card_up'}><IoIosArrowDown /></button>
                </div>
                <ul className={categoryActive ? 'card_categories' : 'card_categories_inactive'}>
                  {categories?.map(category => <li className='card_category' onClick={dataCategory} id={category.id} key={category.id}>{category.name}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className='Searcher_products'>
            <form action="" className='card_form' onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder='What are you looking for?' autoComplete='off' {...register('product', { required: true })} />
            </form>
            <button className={filter ? 'filter_button_active' : 'filter_button'} onClick={activate}><AiFillFilter />Filters</button>
            <div className='card_products'>
              {
                products?.map(product => {
                  if (minValue && maxValue) {
                    if (+product.price > minValue && +product.price < maxValue)
                      return <CardProduct key={product.id} product={product} setnumber={setnumber} />
                  }
                  else if (category) {
                    if (category == product.category.id)
                      return <CardProduct key={product.id} product={product} setnumber={setnumber} />
                  }
                  else {
                    if (productName) {
                      if (product.title.toLowerCase().includes(productName))
                        return <CardProduct key={product.name} product={product} setnumber={setnumber} />
                    }
                    else
                      return <CardProduct key={product.name} product={product} setnumber={setnumber} />
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home