import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${category}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

 return (
    <main className='home'>
       <div className="posts">
        {posts.map(post =>(
          <div className="post" key={post.id}>
            <figure className="img">
              <img src={post.img} alt="" />
            </figure>
            <div className="content">
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <Link to={`/post/${post.id}`}><button>Read More</button></Link>
            </div>
          </div>
        ))}
      </div> 
    </main>
  )
}

export default Home