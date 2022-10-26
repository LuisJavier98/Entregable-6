import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
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
    )
}

export default Footer