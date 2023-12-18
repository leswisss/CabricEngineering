import React, {useState} from 'react'
import { PortHero, PortfolioGallery } from '@/components'

const Portfolio = () => {
  const [onComplete1, setOnComplete1] = useState(false);
  const [onComplete2, setOnComplete2] = useState(false);
  
  return (
    <>
      <PortHero />
      <PortfolioGallery />
    </>
  )
}

export default Portfolio