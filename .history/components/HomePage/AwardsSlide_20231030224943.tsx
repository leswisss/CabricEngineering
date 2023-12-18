import React from 'react'
import Image from 'next/image'
import awards
import IMAGE from "../../public/images/architecture.jpg"
import "../../styles/HomePage/AwardsSlide.scss"

const AwardsSlide = ({data}: {data:}) => {
  return (
    <div className='award__slide'>
      <div className="as__left">
        <p>The Tierra Firma Trophy</p>
      </div>
      <div className="as__right">
        <div className="as__content">
          <span>International Soceity Of Sustainable Architecture</span>
          <span>2023</span>
        </div>
        <div className="as__image">
          <Image src={IMAGE} alt='Trophy Image' fill quality={100} sizes='(max-width: 600px) 100%, 100%'/>
        </div>
      </div>
    </div>
  )
}

export default AwardsSlide