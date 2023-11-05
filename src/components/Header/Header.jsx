import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import  { AiOutlineClose }  from 'react-icons/ai'
import { FaTelegram,FaInstagramSquare } from 'react-icons/fa'

import './Header.scss'
const Header = () => {
  const [ navbar, setNavbar ] = useState(false);
  return (
    <header>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="navbar-logo">
              <NavLink to={'/'}><h1>Davan Hotel</h1></NavLink>
            </div>
            <div className="navbar-items">
              <ul className={`navbar-links ${navbar ? 'navbar-open' : ''}`}>
                <NavLink to={'https://t.me/davan_hotel_rasmlar'}><li className='navbar-link'><FaTelegram /></li></NavLink>
                <NavLink to={'https://www.instagram.com/davan_hotel_uz/?ref=27032015&hl=da'}><li className='navbar-link'><FaInstagramSquare /></li></NavLink>
                <NavLink to={'/'}><li className='navbar-link'>+998 95 142 65 65</li></NavLink>
                <button className='navbar-close-button' onClick={() => setNavbar(false)}><AiOutlineClose /></button>
              </ul>
              <button className='navbar-hamburger' onClick={() => setNavbar(true)}><GiHamburgerMenu /></button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header