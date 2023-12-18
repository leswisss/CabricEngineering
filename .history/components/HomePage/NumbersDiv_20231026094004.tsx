"use client";

import React from 'react'
import { numbersProps } from '@/types'
import "../../styles/HomePage/NumbersDiv.scss"

const NumbersDiv = ({data} : {data: numbersProps}) => {
  return (
    <div className='numbers__div'>
      <div className="left__section">
        <div className="a-number">{data.number}</div>
        <span>{data.name}</span>
      </div>
      <div className="right__section">
        <p>
          {data.text}
        </p>
      </div>
    </div>
  )
}

export default NumbersDiv