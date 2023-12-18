import React from 'react'
import "../../styles/HomePage/NumbersDiv.scss"

const NumbersDiv = () => {
  return (
    <div className='numbers__div'>
      <div className="left__section">
        <div className="a-number">20</div>
        <span>PROJECTS COMPLETED</span>
      </div>
      <div className="right__section">
        <p>
          Cabric's projects encompass meticulously crafted 3D architectural plans for both bungalow and duplex structures that reflect a harmonious blend of aesthetics, functionality and sustainability.
        </p>
      </div>
    </div>
  )
}

export default NumbersDiv