import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { FiArchive } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../context/CreateContext'

const Header = ({ activateCar }) => {
    const navigate = useNavigate()
    const { productsBought } = useContext(DataContext)
    return (
        <header className='bg-gray-800 z-20 opacity-90 card_header flex top-0 flex-col gap-4 md:flex md:flex-row justify-around border-b-2 p-8'>
            <h1 className='mt-0 text-red-600  text-4xl sm:text-5xl text-center font-bold cursor-pointer' onClick={() => navigate('/')} >e-commerce</h1>
            <div className='flex gap-4 md:gap-8 justify-center text-gray-50 '>
                <button className='text-3xl sm:text-4xl px-5 md:border-r-2 text-white' onClick={() => navigate('/login')} ><AiOutlineUser /></button>
                <button className='text-3xl sm:text-4xl px-5 md:border-r-2  text-white' onClick={() => navigate('/purchases')}><FiArchive /></button>
                <button onClick={activateCar} className=' px-5 md:border-r-2 text-3xl sm:text-4xl relative text-white'><AiOutlineShoppingCart /><p className='absolute text-sm text-white font-bold top-0 right-0 bg-red-600 rounded-full w-5'>{productsBought.length}</p></button>
            </div>
        </header>
    )
}

export default Header