import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const WritePost = () => {
  const [value, setValue] = useState('');
  console.log(value)

  return (
    <main className='write-page'>
      <div className="container">
        <div className="content">
          <label htmlFor="title">Title</label>
          <input type="text" id='title'/>
          <div className="edit-content">
            <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h2>Publish</h2>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span> 
            <label className='file-image' htmlFor="file-image">Upload Image</label>
            <input style={{display: 'none'}} type="file" name="file-image" id="file-image" />
            <div className="buttons">
              <button>Save as draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className="item">
            <h2>Category</h2>
            <div className="category">
              <input type="radio" name='category' value='art' id='art' />
              <label htmlFor="art">ART</label>
            </div>
            <div className="category">
              <input type="radio" name='category' value='science' id='science' />
              <label htmlFor="science">SCIENCE</label>
            </div>
            <div className="category">
              <input type="radio" name='category' value='technology' id='technology' />
              <label htmlFor="technology">TECHNOLOGY</label>
            </div>
            <div className="category">
              <input type="radio" name='category' value='cinema' id='cinema' />
              <label htmlFor="cinema">CINEMA</label> 
            </div>
            <div className="category">
              <input type="radio" name='category' value='music' id='music' />
              <label htmlFor="music">MUSIC</label>
            </div>
          <div className="category">
            <input type="radio" name='category' value='food' id='food' />
              <label htmlFor="food">FOOD</label>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WritePost