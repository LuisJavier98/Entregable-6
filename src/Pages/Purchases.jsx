import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Header from '../Components/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import getConfig from '../Utils/getConfig'
import Footer from '../Components/Footer'
import '../Styles/Purchases.css'




const Purchases = () => {

  const [productsPurchased, setproductsPurchased] = useState()
  useEffect(() => {
    URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setproductsPurchased(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])
  console.log(productsPurchased)

  return (
    <div className='card_Purchases' >
      <Header />
      <div className='card_bodyPurchases'>
        <p className='text_direction'> <button className='button_back'>
          <Link className='link_back' to='/'><BsFillArrowLeftCircleFill /></Link>
        </button>
          <br />
          Home <AiOutlineArrowRight style={{ color: '#f85555' }} />
          <strong>Purchases</strong></p>
        <h2>My purchases</h2>
        <div className='card_productsPurchased'>
          {productsPurchased?.map(product =>
            <div className='card_caracteristicsPurchases'>
              <h3 style={{ borderBottom: '1px solid gray', padding: '8px 0px' }}>{product.createdAt.slice(0,10)}</h3>
              <div className='card_PropertiesPurchases'>
                {
                  product.cart.products.map(p =>
                    <div className='card_PropertyPurchases' style={{margin:'8px 0px'}}>
                      <div style={{maxWidth:'30%'}}>{p.title}</div>
                      <div style={{ border: '1px solid gray', width: '5%', textAlign: 'center',height:'15px' }}>{p.productsInCart.quantity}</div>
                      <div>${p.price}</div>

                    </div>
                  )
                }
              </div>
            </div>)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Purchases