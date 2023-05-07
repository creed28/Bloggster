import React from 'react'

const Footer = () => {
const date = new Date(); 

  return (
    <footer>
      <div className="credit">
        Created by <span>Hristo Zagorliev</span> | All Rights Reserved | Copyright&copy;&nbsp;
        {date.getFullYear()} <span> Bloggster.</span>
      </div>
    </footer>
  )
}

export default Footer
