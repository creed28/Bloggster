import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <Link className='link-nav' to="/?cat=art">
        <h6>ART</h6>
      </Link>
      <Link className='link-nav' to="/?cat=science">
        <h6>SCIENCE</h6>
      </Link>
      <Link className='link-nav' to="/?cat=technology">
        <h6>TECHNOLOGY</h6>
      </Link>
      <Link className='link-nav' to="/?cat=cinema">
        <h6>CINEMA</h6>
      </Link>
      <Link className='link-nav' to="/?cat=music">
        <h6>MUSIC</h6>
      </Link>
      <Link className='link-nav' to="/?cat=food">
        <h6>FOOD</h6>
      </Link>
    </>
  )
}

export default Nav
