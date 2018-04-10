import React from 'react'
import Link from 'gatsby-link'

const PropsList = ({ imgs, titles, descs }) => {
  return (
    <div className="row">
      {titles.map((title, index) => (
        <div className="col-md-4" key={index}>
          <div className="text-center">
            <div className="item-img"><img src={imgs[index]} /></div>
            <h2>{title}</h2>
            <p>{descs[index]}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

PropsList.defaultProps = {
  imgs: [],
  titles: [],
  descs: []
}

export default PropsList