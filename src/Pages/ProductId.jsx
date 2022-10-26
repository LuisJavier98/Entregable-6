import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getAllProducts } from '../store/slices/products.slice'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import '../Styles/ProductId.css'
import CardProduct from '../Components/CardProduct'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const ProductId = () => {
  const products = useSelector(state => state.products)
  const [quantity, setquantity] = useState(1)
  const { id } = useParams()
  const dispatch = useDispatch()

  const handlePlus = () => {
    setquantity(quantity + 1)
  }
  const handleSub = () => {
    if (quantity > 1)
      setquantity(quantity - 1)
  }
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div className='card_productId'>
      <Header />
      {
        products ?
          <div className='card_bodyId'>
            <p className='text_direction'> <button className='button_back'>
              <Link className='link_back' to='/'><BsFillArrowLeftCircleFill /></Link>
            </button>
              <br />
              Home <AiOutlineArrowRight style={{ color: '#f85555' }} />
              <strong>{products[+id - 1].title}</strong></p>
            <div className='card_imageDescription'>
              <div className='imagesId'>
                <img className='imageId' src={products[+id - 1].productImgs} alt="" />
              </div>
              <div className='descriptionId'>
                <div className='text_description'>
                  <h3>{products[+id - 1].title}</h3> <br />
                  {products[+id - 1].description}
                </div>
                <div className='text_priceQuantity'>
                  <div className='priceId'>
                    <p style={{ color: 'rgb(163, 147, 147)' }}>Price </p>
                    <div>
                      ${products[+id - 1].price}
                    </div>
                  </div>
                  <div className='quantityId'>
                    <p style={{ color: 'rgb(163, 147, 147)' }}>Quantity <br /><button onClick={handleSub}>-</button>  <em style={{ width: '5px', color: 'black' }}>{quantity}</em>  <button onClick={handlePlus}>+</button></p>
                  </div>
                </div>
                <button className='buttonId'>Add to cart <AiOutlineShoppingCart /></button>
              </div>
            </div>
            <p style={{ color: '#f85555', margin: '30px 0px', fontWeight: '800' }}>Discover similar items</p>
            <div className='card_productsId'>
              <CardProduct product={products[4]} />
              <CardProduct product={products[6]} />
              <CardProduct product={products[7]} />
              <CardProduct product={products[10]} />
            </div>
          </div> : ""
      }
      <Footer />
    </div>
  )
}

export default ProductId