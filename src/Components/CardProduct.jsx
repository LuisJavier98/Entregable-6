import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'


const CardProduct = ({ product }) => {
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
        <button className='button_buy'><AiOutlineShoppingCart /></button>
      </div>
    </article>
  )
}

export default CardProduct