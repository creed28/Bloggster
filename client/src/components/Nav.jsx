import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <Link className='link-nav' to="/?category=art">
        <h6>ART</h6>
      </Link>
      <Link className='link-nav' to="/?category=science">
        <h6>SCIENCE</h6>
      </Link>
      <Link className='link-nav' to="/?category=technology">
        <h6>TECHNOLOGY</h6>
      </Link>
      <Link className='link-nav' to="/?category=cinema">
        <h6>CINEMA</h6>
      </Link>
      <Link className='link-nav' to="/?category=music">
        <h6>MUSIC</h6>
      </Link>
      <Link className='link-nav' to="/?category=food">
        <h6>FOOD</h6>
      </Link>
    </>
  )
}

export default Nav
