import React from 'react'
import { BsNewspaper } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='nav__logo'>
        <h1 className='nav__logo-first'>
          Cocktail<span className='nav__logo-second'>Manager</span>
        </h1>
      </Link>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link to='about' className='nav__link'>
            <BsNewspaper className='nav__link-icon' />
            <p className='nav__link-text'>About</p>
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/' className='nav__link'>
            <AiOutlineHome className='nav__link-icon' />
            <p className='nav__link-text'>Home</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
