import React from 'react'
import "./BodyContainer.css";
function BodyContainer({children}) {
  return (
    <div className='child'>
        { children} 
    </div>
  )
}

export default BodyContainer
