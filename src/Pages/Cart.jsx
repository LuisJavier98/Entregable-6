import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../Utils/getConfig'
import CartProducts from '../Components/CartProducts'

const Cart = ({ carActive }) => {
  const [productsBought, setproductBougth] = useState()
  const [plusPrices, setPlusPrices] = useState([])

  const addtoPurchase = () => {
    URL = 'hhttps://e-commerce-api.academlo.tech/api/v1/purchases'
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
    URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => {
        setproductBougth(res.data.data.cart.products)
        const Plus = res.data.data.cart.products.map(p => +p.price * p.productsInCart.quantity)
        setPlusPrices(Plus)
      })
      .catch(err => console.log(err))
  })

  return (

    <div className={carActive ? 'w-full md:w-2/3 fixed right-0 p-8 h-screen transition-all bg-white z-10 rounded-2xl shadow-2xl' : 'h-full transition-all fixed -right-16'}>
      <h3 className='text-3xl font-black mb-5'>Shopping cart</h3>
      <div className='h-80 overflow-auto'>
        {productsBought?.map(product => <CartProducts product={product} productsBought={productsBought} />
        )}
      </div>
      <div className='flex items-center justify-evenly my-4'>
        <p className='font-black text-2xl'>Total</p>
        <p className='font-black text-2xl'>
          {
            plusPrices.length == 0 ? "$0" :
              <div style={{ color: 'black', fontWeight: '600' }}>${plusPrices.reduce((a, b) => a + b)}</div>
          }
        </p>
      </div>
      <button onClick={addtoPurchase} className='bg-red-600 hover:bg-red-700 p-3 w-3/4 mx-auto block text-lg font-bold text-white'>Checkout</button>
    </div>
  )
}

export default Cart