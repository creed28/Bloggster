import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Auth_Photo from '../assets/img/auth-photo.png';
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("/auth/register", inputs)
      console.log(res);
      navigate("/login");
    } catch(err) {
        setErr(err.response.data);
    }
  }

  return (
    <main className='auth'>
      <div className="wrapper">
        <div className="left">
          <div className="header">
            <h1>Bloggster<span>.</span></h1>
            <p>Create Your Account</p>
          </div>
          <form>
            <div className="form-container">
              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input 
                  required 
                  type="email"
                  name='email' 
                  id='email' 
                  onChange={handleChange} />
              </div>
              <div className="form-item">
                <label htmlFor="username">Username</label>
                <input 
                  required 
                  type="text"
                  name='username' 
                  id='username' 
                  onChange={handleChange} />
              </div>
              <div className="form-item">
                <label htmlFor="password">Password</label>
                <input 
                  required 
                  type="password" 
                  name="password" 
                  id="password" 
                  onChange={handleChange} />
              </div>
              <button onClick={handleSubmit}>Sign up</button>
              {err && <p>{err}</p>}
              <span>
                Already a bloggster? 
                <Link className='auth-link' to="/login"> Log in</Link>
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

export default Register