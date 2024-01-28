import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaFacebook } from "react-icons/fa";

const Footer = ():JSX.Element => {
    return (
        <footer className='flex flex-col justify-center font-black bg-gray-800 pt-10 text-gray-50'>
            <div className='flex justify-center gap-2 text-3xl' >
                <AiOutlineCopyrightCircle />{new Date().getFullYear()}
            </div>
            <div className='flex justify-center my-10 text-5xl gap-6 '>
                <a href='https://www.instagram.com/bluhealthnutrition/?hl=es-la' className='button_footer' target={'_blank'}><FiInstagram /></a>
                {/* <a target={'_blank'} href='https://www.instagram.com/academlohq/?hl=es-la' className='button_footer'><AiFillLinkedin /></a> */}
                <a target={'_blank'} href='https://www.facebook.com/profile.php?id=61553913964627' className='button_footer'><FaFacebook /></a>
            </div>
        </footer>
    )
}

export default Footer