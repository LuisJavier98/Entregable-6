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
            }}><Link style={{
                color: '#f85555',textDecoration:'none'
            }} to='/'>e-commerce</Link></h1>
            <div className='buttons_routes'>
                <button className='button_user' ><NavLink style={{color:'rgb(163, 147, 147)'}} to='/login'><AiOutlineUser /></NavLink  ></button>
                <button className='button_purchase'><Link style={{color:'rgb(163, 147, 147)'}} to='/purchases'><FiArchive /></Link></button>
                <button onClick={activateCar} className='button_car'><AiOutlineShoppingCart /></button>
            </div>
        </header>
    )
}

export default Header