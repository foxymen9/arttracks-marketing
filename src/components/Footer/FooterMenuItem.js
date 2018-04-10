import React from 'react'
import Link from 'gatsby-link'

const FooterMenuItem = ({ title, lists }) => {
  return (
    <div className="footer-item">
    	<h4>{title}</h4>
      <ul>
        {lists.map((item, index) => (
          <li key={index}><a href="">{item}</a></li>  
        ))}
      </ul>
    </div>
  )
}

FooterMenuItem.defaultProps = {
  lists: [],
  title: ''
}

export default FooterMenuItem
