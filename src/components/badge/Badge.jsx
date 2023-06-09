import React from 'react'
import './badge.css'
const Badge = (props) => {
  return (
    <div className={`badge badge-${props.type}`}>
      <span className="badge-item">
        {props.content}
        </span>
    </div>
  )
}

export default Badge
