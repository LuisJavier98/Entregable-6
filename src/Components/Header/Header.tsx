import { useNavigate } from 'react-router-dom'
import { useContext, useLayoutEffect, useState } from 'react'
import { DataContext } from '../../context/CreateContext'
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import logo from './Logo.svg'
import './Header.scss'

const Header = (): JSX.Element => {
    const { activateCar } = useContext(DataContext)
    const navigate = useNavigate()
    const { productsBought } = useContext(DataContext)
    useLayoutEffect(() => {
        (document.querySelector(".changeColor div") as HTMLDivElement).style.backgroundColor = "white";
        (document.querySelector(".changeColor label") as HTMLLabelElement).style.fontSize = "18px";
        (document.querySelector(".changeColor label") as HTMLLabelElement).style.fontWeight = "bold";
        (document.querySelector("#search") as HTMLInputElement).onfocus = () => {
            document.querySelector("body")?.classList.add("before")
            document.querySelector("input")?.classList.add("z-40")
        }
        (document.querySelector("#search") as HTMLInputElement).onblur = () => {
            document.querySelector("body")?.classList.remove("before")
            document.querySelector("input")?.classList.remove("z-40")
            document.querySelector("#form")?.classList.remove("displayMenu")
        }
    }, [])

    return (
        <header className='flex flex-col bg-main'>
            <div className='bg-header card_header flex top-0 flex-col gap-4 md:flex md:flex-row justify-between items-center border-b-2'>
                <div className='lg:hidden flex flex-1 justify-center items-center'>
                    <button className='text-4xl' onClick={() => { 
                        document.querySelector('#navigate')?.classList.add('displayNav')
                        document.querySelector("body")?.classList.add("before")
                        }}><IoMenu /> </button>
                </div>
                <img src={logo} alt="Logo Blue Health" className=' h-44 lg:h-36 cursor-pointer flex-1' onClick={() => navigate('/')} />
                <form id='form' className='w-10/12 -top-1/2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:top-auto lg:relative z-50  md:max-w-2xl  col-span-1 md:col-span-2 lg:col-span-3 flex items-center justify-center flex-1' >
                    <TextField size='medium' color='info' className='relative w-full shadow-xl  h-10 rounded-md z-40 text-red changeColor ' id="search" label="Buscar" variant="filled" >
                        <CiSearch type='submit' className='absolute right-7 cursor-pointer text-black font-boldn scale-150 ' />
                    </TextField>
                </form>
                <div className='flex items-center justify-center text-gray-50 py-5 md:py-0 flex-1 '>
                    <button className='option text-2xl sm:text-2xl px-3 flex justify-center items-center gap-3  text-black hover:text-navBar lg:hidden' onClick={() => {
                        document.querySelector("#form")?.classList.add("displayMenu");
                        (document.querySelector("#search") as HTMLInputElement).focus()
                    }}> <CiSearch className='text-4xl' /> </button>
                    <button className='option text-2xl sm:text-2xl px-3 flex justify-center items-center gap-3  text-black hover:text-navBar' onClick={() => navigate('/login')} ><CiUser className='text-4xl' /> <span className='hidden lg:block'>Cuenta</span></button>
                    <button onClick={activateCar} className=' px-3 text-2xl sm:text-2xl relative gap-3 text-black option flex'><CiShoppingCart className='self-center text-4xl' /> <span className='hidden lg:block self-center'>Cesta</span></button>
                </div>
            </div>
        </header>
    )
}

export default Header