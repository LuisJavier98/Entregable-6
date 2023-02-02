import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='flex flex-col justify-center font-black bg-gray-800 pt-10 text-gray-50'>
            <div className='flex justify-center gap-2 text-3xl' >
                <AiOutlineCopyrightCircle />Academlo {new Date().getFullYear()}
            </div>
            <div className='flex justify-center my-10 text-5xl gap-6 '>
                <a href='https://www.linkedin.com/school/academlo/?originalSubdomain=mx' className='button_footer' target={'_blank'}><FiInstagram /></a>
                <a target={'_blank'} href='https://www.instagram.com/academlohq/?hl=es-la' className='button_footer'><AiFillLinkedin /></a>
                <a target={'_blank'} href='https://www.youtube.com/c/academlo' className='button_footer'><AiFillYoutube /></a>
            </div>
        </footer>
    )
}

export default Footer