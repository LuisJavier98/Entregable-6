import { AiOutlineUser } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Purchases = () => {
  return (
    <div>
      <header className='card_header'>
        <h1 style={{
          color: '#f85555'
        }}>e-commerce</h1>
        <div className='buttons_routes'>
          <button className='button_header' ><AiOutlineUser /></button>
          <button className='button_header'><Link to='/purchases'><FiArchive /></Link></button>
          <button className='button_header'><AiOutlineShoppingCart /></button>
        </div>
      </header>
      <div className='card_bodyPurchases'>
        <p className='text_direction'> <button className='button_back'>
          <Link className='link_back' to='/'><BsFillArrowLeftCircleFill /></Link>
        </button>
          <br />
          Home <AiOutlineArrowRight style={{ color: '#f85555' }} />
          <strong>Purchases</strong></p>
      </div>
    </div>
  )
}

export default Purchases