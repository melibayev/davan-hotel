import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import  { AiOutlineClose }  from 'react-icons/ai'

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
                <NavLink to={'/'}><li className='navbar-link'>Home</li></NavLink>
                <NavLink to={'/'}><li className='navbar-link'>Blogs</li></NavLink>
                <NavLink to={'/'}><li className='navbar-link'>About Us</li></NavLink>
                <NavLink to={'/'}><li className='navbar-link'>Register</li></NavLink>
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