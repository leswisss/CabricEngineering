import React from 'react'
import Image from 'next/image'
import { awardsProps } from '@/types'
import IMAGE from "../../public/images/architecture.jpg"
import "../../styles/HomePage/AwardsSlide.scss"

const AwardsSlide = ({data}: {data: awardsProps}) => {
  return (
    <div className='award__slide'>
      <div className="as__left">
        <p>{data.award}</p>
      </div>
      <div className="as__right">
        <div className="as__content">
        <span>{data.giver}</span>
          <span>{data.year}</span>
        </div>
        <div className="as__image">
          <Image src={data.image} alt={`${data.award}`} fill quality={100} sizes='(max-width: 600px) 100%, 100%'/>
        </div>
      </div>
    </div>
  )
}

export default AwardsSlide