import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'

const Header = ({activateCar}) => {
    return (
        <header className='card_header'>
            <h1 style={{
                color: '#f85555'
            }}>e-commerce</h1>
            <div className='buttons_routes'>
                <button className='button_user' ><NavLink to='/login'><AiOutlineUser /></NavLink  ></button>
                <button className='button_purchase'><Link to='/purchases'><FiArchive /></Link></button>
                <button onClick={activateCar} className='button_car'><AiOutlineShoppingCart /></button>
            </div>
        </header>
    )
}

export default Header