import React from 'react'
import "./Title.css";
function Title({title,subtitle}) {
  return (
    <div className='head'>
      {title}
      <p className='subfont'>{subtitle}</p>
    </div>
  )
}

export default Title
