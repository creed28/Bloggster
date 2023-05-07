import React from 'react'
import { Link } from 'react-router-dom';
import Auth_Photo from '../assets/img/auth-photo.png';

const Login = () => {
  return (
    <main className='auth'>
      <div className="wrapper">
        <div className="left">
          <div className="header">
            <h1>Bloggster<span>.</span></h1>
            <p>Welcome Back</p>
          </div>
          <form>
            <div className="form-container">
              <div className="form-item">
                <label htmlFor="username">Username</label>
                <input required type="text"
                name='username' id='username' />
              </div>
              <div className="form-item">
                <label htmlFor="password">Password</label>
                <input required type="password" name="password" id="password" />
              </div>
              <div className="form-item">
                <div className="checkbox">
                <input required type="checkbox" name="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" className='checkboxLabel'>Remember me</label>
                </div>
              </div>
              <button type='submit'>Log in</button>
              <p>Error!</p>
              <span>
                New to Bloggster?
                <Link className='auth-link' to="/register"> Sign up</Link>
              </span>
            </div>
          </form>
        </div>
        <div className="right">
          <img src={Auth_Photo} alt=""/>
        </div>
      </div>
    </main>
  )
}

export default Login