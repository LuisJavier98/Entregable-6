import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../Utils/getConfig'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRef } from 'react'


const CardProduct = ({ product, carrito, setcarrito }) => {

  const Reference = useRef()
  useEffect(() => {
    Reference.current.childNodes[0].childNodes[0].id = product.id
  }, [product])

  const putbyId = e => {
    console.log(e.target.id)
    URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
    axios.post(URL,
      {
        "id": e.target.id,
        "quantity": 1
      }, getConfig())
      .then(res => setcarrito([...carrito, res.data]))
      .catch(err => window.alert('Already exists a similar product in your cart'))
  }
  const navigate = useNavigate()
  const information = e => {
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    )
    navigate(`/products/${+e.target.id}`)
  }
  return (
    <article className='product p-6 bg-white border-4 rounded-3xl shadow-xl'>
      <header className='w-11/12 m-auto h-80 object-cover'>
        <img className='cursor-pointer w-full h-full ' onClick={information} id={product.id} src={product.productImgs[0]} alt="Product image" />
      </header>
      <div className='product_caracteristics'>
        <h4 className='font-black text-xl text-center my-5'>{product.title}</h4>
      </div>
      <div className='flex justify-between '>
        <p className='font-bold text-lg text-gray-700'>Price
          <br /><h5 style={{ margin: '0px', color: 'black', fontWeight: '900' }}>
            ${product.price}
          </h5>
        </p>
        <button ref={Reference} onClick={putbyId} className=' text-3xl w-14 hover:bg-red-700 rounded-full bg-red-600 text-gray-50 flex justify-center items-center' id={product.id} >< AiOutlineShoppingCart id={product.id} /></button>
      </div>
    </article>
  )
}

export default CardProduct