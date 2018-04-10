import React from 'react'

const Feature = ({ imgs, descs }) => {
  return (
    <div className="row">
      {descs.map((descs, index) => (
        <div className="col-md-4" key={index}>
          <div className="feature-item">
            <img src={imgs[index]} />
            <p>{descs}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

Feature.defaultProps = {
  imgs: [],
  descs: []
}

export default Feature