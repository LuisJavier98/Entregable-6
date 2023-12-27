import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig, { url } from '../Utils/getConfig'
import CartProducts from '../Components/CartProducts'
import { useContext } from 'react'
import { DataContext, DataContextProps } from '../context/CreateContext'
import { Product, ProductInCart } from '../Interfaces/Interfaces'

const Cart = ({ carrito, setcarrito }: any) => {

  const { productsBought, setproductBought, setcarActive, carActive, activateCar }: DataContextProps = useContext(DataContext)

  const addtoPurchase = () => {
    axios.post(`${url}/api/compras`, {
      "direccion": "Green St. 1456",
    }, getConfig())
      .then(res => {
        setproductBought([])
        setcarActive(false)
        window.alert('Your products bought are in the purchase page')
      })
      .catch(err => {
        console.log(err)
        window.alert("Cart is empty")
      })
  }

  useEffect(() => {
    axios.get(`${url}/api/carrito`, getConfig())
      .then(res => {
        setproductBought(res.data)
      })
      .catch(err => console.log(err))
  }, [carrito])

  return (
    <div className={carActive ? 'w-full fixed top-0 z-10 opacity-95 right-0 h-screen transition-all bg-gray-800 duration-500' : 'h-screen duration-500 w-full transition-all fixed top-0 z-10  -right-16'}>
      <div className='w-full md:w-2/3 absolute right-0 z-20 p-8 h-screen bg-white rounded-2xl shadow-2xl'>
        <div className=' flex text-3xl font-black mb-5 justify-between'>
          <h3 >Shopping cart</h3>
          <button onClick={() => activateCar()}>X</button>
        </div>
        <div className='h-80 overflow-auto flex flex-col gap-4'>
          {productsBought?.map((product: ProductInCart, index) => <CartProducts key={index} product={product} setcarrito={setcarrito} />
          )}
        </div>
        <div className='flex items-center justify-evenly my-4'>
          <p className='font-black text-2xl'>Total</p>
          <p className='font-black text-2xl'>
            <span className='font-bold text-green-700'>
              ${productsBought?.map((p: ProductInCart) => (+p.precio * p.cantidad)).reduce((a: number, b: number) => a + b, 0).toFixed(2)}
            </span>
          </p>
        </div>
        <button onClick={addtoPurchase} className='bg-red-600 hover:bg-red-700 p-3 w-3/4 mx-auto block text-lg font-bold text-white'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart