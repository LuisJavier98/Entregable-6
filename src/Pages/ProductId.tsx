import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getAllProducts } from '../store/slices/products.slice'
import { AiOutlineArrowRight } from 'react-icons/ai'
import getConfig from '../Utils/getConfig'
import { RootState } from '../store/index';
import { Product } from '../Interfaces/Interfaces'
import { url } from '../Utils/getConfig';
import axiosInstance from '../Utils/AxiosConfig'
import { ToastContainer, toast } from 'react-toastify'

const ProductId = () => {
  const products: Product[] = useSelector((state: RootState) => state.products.products)
  const [quantity, setquantity] = useState(1)
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlus = () => {
    setquantity(quantity + 1)
  }

  const handleSub = () => {
    if (quantity > 1)
      setquantity(quantity - 1)
  }

  const addtoCart = () => {
    axiosInstance.post(`${url}/api/carrito/${id}`,
      {
        "cantidad": quantity
      }, getConfig())
      .then((res) => {
        toast.success(res.data.mensaje)
        navigate('/')
      })
      .catch(err => console.log(err))
  }



  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    dispatch(getAllProducts(signal))
    return () => controller.abort()
  }, [])

  return (
    <>
      <div className='mx-6'>
        <p className='flex items-center gap-2 my-6 '>
          <p className='font-bold text-lg cursor-pointer' onClick={() => navigate('/')}>Home</p>
          < AiOutlineArrowRight className='text-lg text-red-600' />
          <p className='font-bold text-xl '>{products?.find((p: Product) => (+p.id as number | undefined) == id)?.nombre}</p>
        </p>

        <div className='flex flex-col overflow-hidden lg:flex-row my-14 w-11/12 mx-auto border-4 border-black rounded-2xl shadow-2xl'>
          <div className='w-full flex-1 flex  bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-dotted border-black'>
            <img className='block m-auto ' src={products?.find((p: Product) => (p.id as number | undefined) == id)?.imagen} alt="" />
            {/* <img className='imageId' src={products?.find(p => p.id == id).productImgs[1]} alt="" />
            <img className='imageId' src={products?.find(p => p.id == id).productImgs[2]} alt="" /> */}
          </div>
          <div className='flex-1 flex flex-col justify-evenly px-6'>
            <div className='text_description'>
              <h3 className='text-3xl font-bold mt-4'>{products?.find(p => (p.id as number | undefined) == id)?.nombre}</h3> <br />
              <div className='text-xl font-medium md:text-2xl '>
                {products?.find(p => (p.id as number | undefined) == id)?.descripcion}
              </div>
            </div>
            <div className='flex mx-auto h-20  w-full md:w-2/3  '>
              <div className='flex-1'>
                <p className='text-gray-600 font-medium text-xl' >Price </p>
                <div className='font-bold text-xl'>
                  ${products?.find(p => (p.id as number | undefined) == id)?.precio}
                </div>
              </div>
              <div className='flex flex-col flex-1'>
                <p className='text-gray-600 font-medium text-xl' >Quantity </p>
                <div className='flex '>
                  <button onClick={handleSub} className='bg-red-600  hover:bg-red-700 transition-all box-border font-black text-xl  w-1/3 cursor-pointer'>-</button>
                  <p className='w-1/3 box-border text-xl font-black text-center'>{quantity}</p>
                  <button className='bg-red-600 transition-all hover:bg-red-700 box-border font-black text-xl cursor-pointer w-1/3' onClick={handlePlus}>+</button>

                </div>
              </div>
            </div>
            <button onClick={addtoCart} className='flex my-4 text-2xl transition-all bg-red-600 p-4 w-2/3 justify-center mx-auto rounded-2xl shadow-xl text-white font-black hover:bg-red-700 '>Add to cart <span className='ml-4 mt-1 font-bold text-2xl'><AiOutlineShoppingCart /></span> </button>
          </div>
        </div>
        <p className='font-black text-3xl text-red-600'> Discover similar items</p>
        <div className='grid grid-cols-1 gap-14 w-11/12 lg:w-2/3 mx-auto my-14 lg:grid-cols-2' >
          {/* <CardProduct product={products?.[4]}  />
        <CardProduct product={products?.[6]} />
        <CardProduct product={products?.[7]} />
        <CardProduct product={products?.[10]} /> */}
        </div>
      </div>
    </>
  )
}

export default ProductId