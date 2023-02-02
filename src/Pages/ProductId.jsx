import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getAllProducts } from '../store/slices/products.slice'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import CardProduct from '../Components/CardProduct'
import axios from 'axios'
import getConfig from '../Utils/getConfig'

const ProductId = () => {
  const products = useSelector(state => state.products)
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
    URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
    axios.post(URL,
      {
        "id": id,
        "quantity": quantity
      }, getConfig())
      .then(res => {
        console.log(res.data)
        navigate('/')
        window.alert('Products added to the cart , please check your shopping cart')
      })
      .catch(err => console.log(err))
  }



  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className='card_productId'>
      <div className='card_bodyId'>
        <p className='text_direction'>
          <button className='button_back' onClick={() => navigate('/')}>
            <BsFillArrowLeftCircleFill />
          </button>
          <br />
          Home <AiOutlineArrowRight />
          <div className='font-bold text-xl '>{products?.find(p => p.id == id).title}</div></p>
        <div className='flex flex-col overflow-hidden lg:flex-row my-14 w-11/12 mx-auto border-4 border-black rounded-2xl shadow-2xl'>
          <div className='w-full flex-1 flex  bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-dotted border-black'>
            <img className='block m-auto ' src={products?.find(p => p.id == id).productImgs[0]} alt="" />
            {/* <img className='imageId' src={products?.find(p => p.id == id).productImgs[1]} alt="" />
            <img className='imageId' src={products?.find(p => p.id == id).productImgs[2]} alt="" /> */}
          </div>
          <div className='flex-1 flex flex-col justify-evenly px-6'>
            <div className='text_description'>
              <h3 className='text-3xl font-bold mt-4'>{products?.find(p => p.id == id).title}</h3> <br />
              <div className='text-xl font-medium md:text-2xl '>
                {products?.find(p => p.id == id).description}
              </div>
            </div>
            <div className='flex mx-auto h-20  w-full md:w-2/3  '>
              <div className='flex-1'>
                <p className='text-gray-600 font-medium text-xl' >Price </p>
                <div className='font-bold text-xl'>
                  ${products?.find(p => p.id == id).price}
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
          <CardProduct product={products[4]} />
          <CardProduct product={products[6]} />
          <CardProduct product={products[7]} />
          <CardProduct product={products[10]} />
        </div>
      </div>

    </div>
  )
}

export default ProductId