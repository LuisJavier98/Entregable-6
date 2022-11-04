import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../Utils/getConfig'
import '../Styles/Cart.css'
import CartProducts from '../Components/CartProducts'

const Cart = ({ carActive }) => {
  const [productsBought, setproductBougth] = useState()
  const [plusPrices, setPlusPrices] = useState([])

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
      .catch(err => {
        console.log(err)
        window.alert("Cart is empty")
      })
  }

  useEffect(() => {
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => {
        setproductBougth(res.data.data.cart.products)
        const Plus = res.data.data.cart.products.map(p => +p.price * p.productsInCart.quantity)
        setPlusPrices(Plus)
      })
      .catch(err => console.log(err))
  })

  return (

    <div className={carActive ? 'card_car_inactive' : 'card_car'}>
      <h3 className='text_Cart'>Shopping cart</h3>
      <div className='card_productsCart'>
        {productsBought?.map(product => <CartProducts product={product} productsBought={productsBought} />
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