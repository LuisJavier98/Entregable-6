import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getAllProducts } from '../store/slices/products.slice'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import '../Styles/ProductId.css'
import CardProduct from '../Components/CardProduct'

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

  let numbers = []
  numbers.push(Math.floor(Math.random() * (products?.length)))

  for (let i = 0; i <= 99; i++) {
    if (numbers.length < 4) {
      const b = Math.floor(Math.random() * (products?.length))
      if (numbers.includes(b)) { }
      else { numbers.push(b) }
    }
    else break

  }

  const [a] = numbers
  const [, b] = numbers
  const [, , c] = numbers
  const [, , , d] = numbers

  console.log(numbers)


  return (
    <div className='card_productId'>
      <header className='card_header'>
        <h1 style={{
          color: '#f85555'
        }}>e-commerce</h1>
        <div className='buttons_routes'>
          <button className='button_header' ><AiOutlineUser /></button>
          <button className='button_header'><FiArchive /></button>
          <button className='button_header'><AiOutlineShoppingCart /></button>
        </div>
      </header>
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
                    <p style={{ color: 'rgb(163, 147, 147)' }}>Quantity <br /><button onClick={handleSub}>-</button>  <em style={{ width: '5px', color:'black' }}>{quantity}</em>  <button onClick={handlePlus}>+</button></p>
                  </div>
                </div>
                <button className='buttonId'>Add to cart <AiOutlineShoppingCart /></button>
              </div>
            </div>
            <p style={{ color: '#f85555', margin: '30px 0px', fontWeight: '800' }}>Discover similar items</p>
            <div className='card_productsId'>
              <CardProduct product={products[a]} />
              <CardProduct product={products[b]} />
              <CardProduct product={products[c]} />
              <CardProduct product={products[d]} />
            </div>
          </div> : ""
      }
      <footer style={{ marginTop: '80px' }}>
        <div style={{ color: 'white', paddingTop: '10px ' }}>
          <strong>
            <AiOutlineCopyrightCircle />Academlo 2022
          </strong>
        </div>
        <div className='buttons_footer'>
          <a href='https://www.linkedin.com/school/academlo/?originalSubdomain=mx' className='button_footer' target={'_blank'}><FiInstagram /></a>
          <a target={'_blank'} href='https://www.instagram.com/academlohq/?hl=es-la' className='button_footer'><AiFillLinkedin /></a>
          <a target={'_blank'} href='https://www.youtube.com/c/academlo' className='button_footer'><AiFillYoutube /></a>
        </div>
      </footer>
    </div>
  )
}

export default ProductId