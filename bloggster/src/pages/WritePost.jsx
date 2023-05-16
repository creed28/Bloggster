import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Logo from '../assets/img/logo.png'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import Category from '../components/Category';

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
          <input value={title} autoFocus type="text" id='title' onChange={e => setTitle(e.target.value)}/>
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
          <Category category={category} setCategory={setCategory} />
        </div>
      </div>
    </main>
  )
}

export default WritePost