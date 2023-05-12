import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import Edit from '../assets/img/edit.png'
import Delete from '../assets/img/delete.png'
import { AuthContext } from '../context/authContext';
import DOMPurify from "dompurify";

const SinglePost = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <article className='single-post'>
      <div className="container">
      <div className="content">
        <img src={`../uploads/${post?.postIMG}`} alt="" />
        <div className="user">
          {post.userIMG && <img src={post.userIMG} alt="" />}
          <div className="info">
            <span>Author: {post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img title='Edit Post' src={Edit} alt="" />
            </Link>
            <img onClick={handleDelete} title='Delete Post' src={Delete} alt="" />
          </div>}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      <Menu category={post.category} />
      </div>
    </article>
  )
}

export default SinglePost