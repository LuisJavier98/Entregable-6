import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig, { url } from '../Utils/getConfig.Js'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Product } from '../Interfaces/Interfaces'
import { toast } from 'react-toastify'
import axiosInstance from '../Utils/AxiosConfig'

interface CardProduct {
  product: Product,
  carrito?: any,
  setcarrito?: any
}

const CardProduct = ({ product, carrito, setcarrito }: CardProduct) => {


  const putbyId = (e: React.MouseEvent): void => {
    if (!('id' in e.currentTarget) || !e.currentTarget.id) return
    axiosInstance.post(`${url}/api/carrito/${(e.currentTarget as HTMLButtonElement).id}`,
      {
        "cantidad": 1
      }, getConfig())
      .then(res => {
        toast.success("Producto agregado correctamente")
        setcarrito([...carrito, res.data])
      })
      .catch(() => { })
    e.stopPropagation()
  }
  const navigate = useNavigate()
  const information = (e: React.MouseEvent): void => {
    if (!('id' in e.target)) return
    const id: string = (e.target as HTMLButtonElement).id
    window.scrollTo(
      {
        top: 0,
        behavior: 'smooth'
      }
    )
    navigate(`/products/${id}`)
  }

  return (
    <article className='product p-6 bg-white border-4 rounded-3xl shadow-xl'>
      <header className='w-11/12 m-auto h-80 object-cover'>
        <img className='cursor-pointer w-full h-full ' onClick={information} id={product.id.toString()} src={product.imagen} alt="Product image" />
      </header>
      <div className='product_caracteristics'>
        <h4 className='font-black text-xl text-center my-5 truncate'>{product.nombre}</h4>
        <h5 className='text-center font-bold text-lg'>Cantidad: {product.unidades} unidades</h5>
      </div>
      <div className='flex justify-between '>
        <p className='font-bold text-lg text-gray-700'>Price
          <br /><span style={{ margin: '0px', color: 'black', fontWeight: '900' }}>
            ${product.precio}
          </span>
        </p>
        <button onClick={putbyId} className=' text-3xl w-14 hover:bg-red-700 rounded-full bg-red-600 text-gray-50 flex justify-center items-center' id={product.id.toString()} >< AiOutlineShoppingCart onClick={putbyId} /></button>
      </div>
    </article>
  )
}

export default CardProduct