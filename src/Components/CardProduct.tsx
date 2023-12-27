import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig, { url } from '../Utils/getConfig'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRef } from 'react'
import { Product } from '../Interfaces/Interfaces'

interface CardProduct {
  product: Product,
  carrito: any,
  setcarrito: any
}

const CardProduct = ({ product, carrito, setcarrito }: CardProduct) => {

  // const Reference = useRef<HTMLElement | undefined>()
  // useEffect(() => {
  //   Reference.current.childNodes[0].childNodes[0].id = product.id
  // }, [product])

  const putbyId = (e: React.MouseEvent): void => {
    if (!('id' in e.currentTarget) || !e.currentTarget.id) return
  
    axios.post(`${url}/api/carrito/${(e.currentTarget as HTMLButtonElement).id}`,
      {
        "cantidad": 1
      }, getConfig())
      .then(res => setcarrito([...carrito, res.data]))
      .catch(err => window.alert('Already exists a similar product in your cart'))
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