import { Link, useNavigate } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import getConfig, { fecha, url } from '../Utils/getConfig'



const Purchases = () => {

  const [productsPurchased, setproductsPurchased] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${url}/api/compras`, getConfig())
      .then(res => setproductsPurchased(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(productsPurchased)

  return (

    <div className='mx-6'>
      <p className='flex items-center gap-2 my-6 '>
        <p className='font-bold text-lg cursor-pointer' onClick={() => navigate('/')}>Home</p>
        < AiOutlineArrowRight className='text-lg text-red-600' />
        <p className='font-bold text-lg'>Purchases</p>
      </p>
      <h2 className='font-black text-2xl '>My purchases</h2>
      <div className='flex flex-col gap-10 items-center my-10'>
        {productsPurchased?.map(product => (
          <table key={product.id} className='w-full md:w-2/3 p-6 border-2 border-black shadow-2xl rounded-2xl'  >
            <thead className='border-b-2 border-black'>
              <tr className='text-2xl font-bold text-red-600 '>
                {fecha(product.createdAt)}
              </tr>
            </thead>
            <tbody className='card_PropertiesPurchases'>
              {
                product.cart.products.map(p =>
                (<tr key={p.id} className='border-b-2 border-dotted border-black flex flex-row' >
                  <td className='font-bold text-lg flex-1 text-center'  >{p.title}</td>
                  <td className='font-black text-lg flex-1 text-center'>{p.productsInCart.quantity}</td>
                  <td className='font-medium text-lg text-green-700 flex-1 text-center'>${p.price}</td>
                </tr>)
                )
              }
            </tbody>
          </table>))}
      </div>
    </div>
  )
}

export default Purchases