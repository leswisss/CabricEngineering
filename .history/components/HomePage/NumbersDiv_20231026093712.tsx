import React from 'react'
import { numbersProps } from '@/types'
import "../../styles/HomePage/NumbersDiv.scss"

const NumbersDiv = ({data} : {data: numbersProps}) => {
  return (
    <div className='numbers__div'>
      <div className="left__section">
        <div className="a-number">{data.number}</div>
        <span>{data.}</span>
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