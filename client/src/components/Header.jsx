import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi'
import Logo from '../assets/img/logo.png';
import { AuthContext } from '../context/authContext';

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <header className='header-comp'>
      <div className="container">
        <Link to='/' className='link'>
          <div className="logo">
            <img src={Logo} alt="" />
            <h1>loggster<span>.</span></h1>
          </div>
        </Link>
        <nav className="nav">
          <Nav />
        </nav>
        <div className="icons">
        {currentUser && <span className='write-post' title='Write Post'>
            <Link className='link-icon' to='/write'><TfiWrite /></Link>
          </span>}
          {currentUser && <span title={currentUser.username}>
            <Link className='link-icon'><FaUser /></Link>
          </span>}
          <span>
          {currentUser ? (
            <span className='link-icon' onClick={logout} title='Logout'><FiLogOut /></span>
          ) : (
            <Link className="link-icon" title='Login' to="/login">
              <FiLogIn />
            </Link>
          )}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header