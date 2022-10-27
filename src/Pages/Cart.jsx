import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../Utils/getConfig'
import '../Styles/Cart.css'

const Cart = ({ carActive, number }) => {
  const [productsBought, setproductBougth] = useState()
  const [plusPrices, setPlusPrices] = useState([])
  const [p, setp] = useState()
  const [a, seta] = useState()
  console.log(number)

  const deleteProduct = e => {
    URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${e.target.id}`
    axios.delete(URL, getConfig())
      .then(res => setp(res))
      .catch(err => console.log(err))
  }
  const addtoPurchase = () => {
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.post(URL, {
      "street": "Green St. 1456",
      "colony": "Southwest",
      "zipCode": 12345,
      "city": "USA",
      "references": "Some references"
    }, getConfig())
      .then(res => {
        console.log(res.data)
        setproductBougth()
        setPlusPrices([])

      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => {
        setproductBougth(res.data.data.cart.products)
        const Plus = res.data.data.cart.products.map(p => +p.price*p.productsInCart.quantity)
        setPlusPrices(Plus)
        seta(number)
      })
      .catch(err => console.log(err))
  }, [p, number])

  return (

    <div className={carActive ? 'card_car_inactive' : 'card_car'}>
      <h3 className='text_Cart'>Shopping cart</h3>
      <div className='card_productsCart'>
        {productsBought?.map(product =>
          <div className='card_productCart'>
            <div className='card_deleteCart'>
              <div style={{ color: 'gray' }}>{product.brand}</div>
              <button id={product.id} onClick={deleteProduct}>Delete</button>
            </div>
            <div style={{ textAlign: 'start', fontWeight: '600' }}>{product.title}</div>
            <div className='card_quantityCart'>{product.productsInCart.quantity}</div>
            <div style={{ textAlign: 'end', color: 'gray' }} className='card_totalCart'>Total: <span style={{ color: 'black', fontWeight: '600' }}>${product.price*product.productsInCart.quantity}</span></div>
          </div>
        )}
      </div>
      <div className='text_totalCart'>
        <p>Total</p>
        {
          plusPrices.length == 0 ? "$0" :
            <div style={{ color: 'black', fontWeight: '600' }}>${plusPrices.reduce((a, b) => a + b)}</div>

        }
      </div>
      <button onClick={addtoPurchase} className='button_Cart'>Checkout</button>
    </div>
  )
}

export default Cart