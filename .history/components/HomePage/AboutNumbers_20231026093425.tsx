import React from 'react'
import { NumbersDiv } from '..'
import { numbersData } from '@/utils'

const AboutNumbers = () => {
  return (
    <div>
      {
        numbersData.map((data, i) => (
          <NumbersDiv key={}/>
        ))
      }
    </div>
  )
}

export default AboutNumbers