import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Logo from '../assets/img/logo.png'
import axios from 'axios';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const WritePost = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || '');
  const [title, setTitle] = useState(state?.title || '');
  const [category, setCategory] = useState(state?.category || '');
  const [img, setImg] = useState(null);

  const navigate = useNavigate();

  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append('file', img);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state ? await axios.put(`/posts/${state.id}`, {
        title, 
        desc: value, 
        category, 
        img: img ? imgUrl : ''}) 
      : await axios.post(`/posts/`, {
        title, 
        desc: value, 
        category, 
        img: img ? imgUrl : '',
        date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className='write-page'>
      <div className="container">
        <div className="content">
          <label htmlFor="title">Title</label>
          <input value={title} type="text" id='title' onChange={e => setTitle(e.target.value)}/>
          <div className="edit-post">
            <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <div className="logo">
              <img src={Logo} alt="" />
              <h2>Publish</h2>
            </div>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span> 
            <label className='file-image' htmlFor="file-image">Upload Image</label>
            <input style={{display: 'none'}} 
            type="file" 
            name="file-image" 
            id="file-image" 
            onChange={e => setImg(e.target.files[0])} />
            <div className="buttons">
              <button>Save as draft</button>
              <button onClick={handleSubmit}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h2>Category</h2>
            <div className="category">
              <input checked={category === 'art'} type="radio" name='category' value='art' id='art' onChange={e => setCategory(e.target.value)} />
              <label htmlFor="art">ART</label>
            </div>
            <div className="category">
              <input checked={category === 'science'} type="radio" name='category' value='science' id='science' onChange={e => setCategory(e.target.value)} />
              <label htmlFor="science">SCIENCE</label>
            </div>
            <div className="category">
              <input checked={category === 'technology'} type="radio" name='category' value='technology' id='technology' onChange={e => setCategory(e.target.value)} />
              <label htmlFor="technology">TECHNOLOGY</label>
            </div>
            <div className="category">
              <input checked={category === 'cinema'} type="radio" name='category' value='cinema' id='cinema' onChange={e => setCategory(e.target.value)} />
              <label htmlFor="cinema">CINEMA</label> 
            </div>
            <div className="category">
              <input checked={category === 'music'} type="radio" name='category' value='music' id='music' onChange={e => setCategory(e.target.value)} />
              <label htmlFor="music">MUSIC</label>
            </div>
          <div className="category">
            <input checked={category === 'food'} type="radio" name='category' value='food' id='food' onChange={e => setCategory(e.target.value)} />
              <label htmlFor="food">FOOD</label>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WritePost