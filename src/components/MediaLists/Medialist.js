import React from 'react'
import Link from 'gatsby-link'

const Medialist = ({ titles, imgs, names }) => {
  return (
    <div className="media-lists">
      {titles.map((title, index) => (
        <div className={`media-list media-list-${index + 1} text-center`} key={index}>
          <div className="out-wrap">
            <div className="wrap">
              <h2>{title}</h2>
              <p className="name">{names[index]}</p>
              <Link to="javascript:;"><span>play</span></Link>
            </div>
          </div>  
        </div>
      ))}
      <div className="clear-fix"></div>
    </div>
  )
}

Medialist.defaultProps = {
  titles: [],
  imgs: [],
  names: []
}

export default Medialist