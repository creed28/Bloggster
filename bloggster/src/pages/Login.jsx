import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Auth_Photo from '../assets/img/auth-photo.png';
import Logo from '../assets/img/logo.png';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })

  const [err, setErr] = useState(null)

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/");
    } catch(err) {
        setErr(err.response.data);
    }
  }

  return (
    <main className='auth'>
      <div className="wrapper">
        <div className="left">
          <div className="header">
            <div className="logo">
              <img src={Logo} alt="" />
              <h1>loggster<span>.</span></h1>
            </div>
            <p>Welcome Back</p>
          </div>
          <form>
            <div className="form-container">
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
                <input required 
                type="password" 
                name="password" 
                id="password"
                onChange={handleChange} />
              </div>
              <div className="form-item">
                <div className="checkbox">
                <input required type="checkbox" name="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe" className='checkboxLabel'>Remember me</label>
                </div>
              </div>
              <button onClick={handleSubmit}>Log in</button>
              {err && <p>{err}</p>}
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