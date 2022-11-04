import axios from 'axios'
import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import getConfig from '../Utils/getConfig'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRef } from 'react'


const CardProduct = ({ product }) => {

  const Reference = useRef()
  useEffect(() => {
    Reference.current.childNodes[0].childNodes[0].id = product.id
  }, [product])

  const putbyId = e => {
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.post(URL,
      {
        "id": e.target.id,
        "quantity": 1
      }, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
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
    <article className='product'>
      <header className='card_product'>
        <img className='product_image' onClick={information} id={product.id} src={product.productImgs[0]} alt="Product image" />
      </header>
      <div className='product_caracteristics'>
        <h4 className='product_title'>{product.title}</h4>
      </div>
      <div className='card_price'>
        <p style={{ color: 'rgb(163, 147, 147)' }}>Price
          <br /><h5 style={{ margin: '0px', color: 'black', fontWeight: '900' }}>
            ${product.price}
          </h5>
        </p>
        <button ref={Reference} onClick={putbyId} className='button_buy' id={product.id} >< AiOutlineShoppingCart id={product.id} /></button>
      </div>
    </article>
  )
}

export default CardProduct