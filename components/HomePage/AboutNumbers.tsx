import React from 'react'
import { NumbersDiv } from '..'


const AboutNumbers = () => {
  const date = new Date();
  const year = date.getFullYear();
  const experience = year - 2018;

  const numbersData = [
    {
      id: 1,
      name: "PROJECTS COMPLETED",
      number: 20,
      text: "Cabric's projects encompass meticulously crafted 3D architectural plans for both bungalow and duplex structures that reflect a harmonious blend of aesthetics, functionality and sustainability."
    },
    {
      id: 2,
      name: "YEARS OF EXPERIENCE",
      number: experience,
      text: "Founded by Tarh Brice in 2018, CABRIC ENGINEERING is led by Tarh Brice, Forghab Christopher and Celine Dione."
    }
  ]
  return (
    <div>
      {
        numbersData.map((data, i) => (
          <NumbersDiv key={`ndata-${i}`} data={data}/>
        ))
      }
    </div>
  )
}

export default AboutNumbers