import React from 'react'
import { NumbersDiv } from '..'
import { numbersData } from '@/utils'

const AboutNumbers = () => {
  return (
    <div>
      {
        numbersData.map((data, i) => (
          <NumbersDiv key={`ndata-${i}`}/>
        ))
      }
    </div>
  )
}

export default AboutNumbers