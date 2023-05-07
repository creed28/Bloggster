import React from 'react'
import Edit from '../assets/img/edit.png'
import Delete from '../assets/img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const SinglePost = () => {
  return (
    <main className='single-post'>
      <div className="container">
      <div className="content">
        <img src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>Author: John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img title='Edit Post' src={Edit} alt="" />
            </Link>
            <img title='Delete Post' src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reiciendis vero officiis iste, assumenda esse eveniet sapiente, porro cum eaque ratione quos itaque sit beatae quaerat quod distinctio rerum repudiandae?
          <br /><br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi totam eius, nemo neque corporis, harum tenetur quisquam amet doloremque officia autem necessitatibus nesciunt iste quasi nostrum officiis? Dolor, dolore placeat.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias, corrupti dignissimos quas non blanditiis inventore! Sint ducimus, quisquam accusamus quaerat, cumque adipisci illum vero sed accusantium quibusdam qui provident.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea porro non libero modi ducimus, accusamus voluptatibus, iste explicabo temporibus exercitationem inventore similique! Doloremque reiciendis tempore provident laborum sunt nam.
          <br /><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil provident eaque facere excepturi dolorum, possimus voluptas veniam repudiandae at omnis, dicta, molestiae placeat quisquam temporibus. Officiis nihil qui vitae libero.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis odio maiores praesentium qui aliquam placeat alias dolore accusantium provident eius reprehenderit iste distinctio neque, nostrum asperiores quo numquam! Aliquid, exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias facilis doloremque delectus, voluptatibus, explicabo cupiditate quae vero provident, sunt sapiente fugit? Sequi distinctio voluptatum obcaecati omnis ea ad excepturi. Error.
        </p>
      </div>
      <Menu />
      </div>
    </main>
  )
}

export default SinglePost