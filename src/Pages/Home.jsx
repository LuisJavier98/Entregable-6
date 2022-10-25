import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../Components/CardProduct'
import { getAllProducts } from '../store/slices/products.slice'
import '../Styles/Home.css'
import { IoIosArrowDown } from 'react-icons/io'
import { AiFillFilter } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { AiOutlineUser } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const Home = () => {

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [categories, setcategories] = useState()
  const [minValue, setminValue] = useState()
  const [maxValue, setmaxValue] = useState()
  const [category, setcategory] = useState()
  const [filter, setfilter] = useState(true)
  const [priceActive, setpriceActive] = useState(false)
  const [categoryActive, setcategoryActive] = useState(false)
  const [productName, setproductName] = useState()

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
  const allCategories = () => {
    setcategories()
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
      <header className='card_header'>
        <h1 style={{
          color: '#f85555'
        }}>e-commerce</h1>
        <div className='buttons_routes'>
          <button className='button_header' ><AiOutlineUser /></button>
          <button className='button_header'><FiArchive /></button>
          <button className='button_header'><AiOutlineShoppingCart /></button>
        </div>
      </header>
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
                <li onClick={allCategories} >All categories</li>
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
                    return <CardProduct key={product.id} product={product} />
                }
                else if (category) {
                  if (category == product.category.id)
                    return <CardProduct key={product.id} product={product} />
                }
                else {
                  if (productName) {
                    if (product.title.toLowerCase().includes(productName))
                      return <CardProduct key={product.name} product={product} />
                  }
                  else
                    return <CardProduct key={product.name} product={product} />
                }
              })
            }
          </div>
        </div>
      </div>
      <footer>
        <div style={{ color: 'white', paddingTop: '10px ' }}>
          <strong>
            <AiOutlineCopyrightCircle />Academlo 2022
          </strong>
        </div>
        <div className='buttons_footer'>
          <a href='https://www.linkedin.com/school/academlo/?originalSubdomain=mx' className='button_footer' target={'_blank'}><FiInstagram /></a>
          <a target={'_blank'} href='https://www.instagram.com/academlohq/?hl=es-la' className='button_footer'><AiFillLinkedin /></a>
          <a target={'_blank'} href='https://www.youtube.com/c/academlo' className='button_footer'><AiFillYoutube /></a>
        </div>
      </footer>
    </div>
  )
}

export default Home