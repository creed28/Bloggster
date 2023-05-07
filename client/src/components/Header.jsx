import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi'

const Header = () => {
  return (
    <header className='header-comp'>
      <div className="container">
        <Link to='/' className='link'>
          <div className="logo">
            <h1>Bloggster<span>.</span></h1>
          </div>
        </Link>
        <nav className="nav">
          <Nav />
        </nav>
        <div className="icons">
          <span className='write-post' title='Write Post'>
            <Link className='link-icon' to='/write'><TfiWrite /></Link>
          </span>
          <span title='Profile'>
            <Link className='link-icon'><FaUser /></Link>
          </span>
          <span title='Logout'>
            <Link className='link-icon'><FiLogOut /></Link>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header