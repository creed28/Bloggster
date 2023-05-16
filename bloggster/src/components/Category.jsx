import React from 'react'

const Category = ({ category, setCategory }) => {
  return (
    <div className="item">
            <h2>Category</h2>
            <div className="category">
              <input checked={category === 'art'} type="radio" name='category' value='art' id='art' 
              onChange={e => setCategory(e.target.value)} />
              <label htmlFor="art">ART</label>
            </div>
            <div className="category">
              <input checked={category === 'science'} type="radio" name='category' value='science' id='science' 
              onChange={e => setCategory(e.target.value)} />
              <label htmlFor="science">SCIENCE</label>
            </div>
            <div className="category">
              <input checked={category === 'technology'} type="radio" name='category' value='technology' 
              id='technology' onChange={e => setCategory(e.target.value)} />
              <label htmlFor="technology">TECHNOLOGY</label>
            </div>
            <div className="category">
              <input checked={category === 'cinema'} type="radio" name='category' value='cinema' id='cinema' 
              onChange={e => setCategory(e.target.value)} />
              <label htmlFor="cinema">CINEMA</label> 
            </div>
            <div className="category">
              <input checked={category === 'music'} type="radio" name='category' value='music' id='music' 
              onChange={e => setCategory(e.target.value)} />
              <label htmlFor="music">MUSIC</label>
            </div>
            <div className="category">
              <input checked={category === 'food'} type="radio" name='category' value='food' id='food' 
              onChange={e => setCategory(e.target.value)} />
              <label htmlFor="food">FOOD</label>
            </div>
          </div>
  )
}

export default Category
