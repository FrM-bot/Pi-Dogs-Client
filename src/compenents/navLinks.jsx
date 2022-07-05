import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import toggleStyles from '../styles/toggle.module.css'

const NavLinks = ({ onClose }) => {

    return (
        <ul className='flex flex-column gap-1 align-center py-2 '>
            <li onClick={onClose}>
                <Link to='/' className='link likn-nav'>
                    Home
                </Link>
            </li>
            <li onClick={onClose}>
                <Link to='/dogs' className='link likn-nav'>
                    All dogs
                </Link>
            </li>
            <li onClick={onClose}>
                <Link to='/about' className='link likn-nav'>
                    About
                </Link>
            </li>
        </ul>
    )
}

export default NavLinks