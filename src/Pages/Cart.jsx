import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../Utils/getConfig'
import CartProducts from '../Components/CartProducts'

const Cart = ({ carActive, activateCar, carrito, setcarrito }) => {
  const [productsBought, setproductBougth] = useState([])

  const addtoPurchase = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
    axios.post(URL, {
      "street": "Green St. 1456",
      "colony": "Southwest",
      "zipCode": 12345,
      "city": "USA",
      "references": "Some references"
    }, getConfig())
      .then(res => {
        console.log(res.data)
        setproductBougth([])
        window.alert('Your products bought are in the purchase')
      })
      .catch(err => {
        console.log(err)
        window.alert("Cart is empty")
      })
  }

  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
    axios.get(URL, getConfig())
      .then(res => setproductBougth(res.data.data.cart.products))
      .catch(err => window.alert('You have asked too many requests , please update the page'))
  }, [carrito])


  return (
    <div className={carActive ? 'w-full fixed top-0 z-10 opacity-95 right-0 h-screen transition-all bg-gray-800 duration-500' : 'h-screen duration-500 w-full transition-all fixed top-0 z-10  -right-16'}>
      <div className='w-full md:w-2/3 absolute right-0 z-20 p-8 h-screen bg-white rounded-2xl shadow-2xl'>
        <div className=' flex text-3xl font-black mb-5 justify-between'>
          <h3 >Shopping cart</h3>
          <button onClick={() => activateCar()}>X</button>
        </div>
        <div className='h-80 overflow-auto flex flex-col gap-4'>
          {productsBought?.map(product => <CartProducts key={product.id} product={product} productsBought={productsBought} setcarrito={setcarrito} />
          )}
        </div>
        <div className='flex items-center justify-evenly my-4'>
          <p className='font-black text-2xl'>Total</p>
          <p className='font-black text-2xl'>
            <div className='font-bold text-black'>${productsBought?.map(p => (+p.price * p.productsInCart.quantity.toFixed(2))).reduce((a, b) => a + b, 0).toFixed(2)}</div>

          </p>
        </div>
        <button onClick={addtoPurchase} className='bg-red-600 hover:bg-red-700 p-3 w-3/4 mx-auto block text-lg font-bold text-white'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart