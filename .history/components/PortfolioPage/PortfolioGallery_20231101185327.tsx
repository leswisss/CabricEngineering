import React from 'react'
import PortfolioImage from './PortfolioImage'
import { portfolioGalleryData } from '@/utils'
import "../../styles/PortfolioPage/PortfolioGallery.scss"

const PortfolioGallery = () => {
  return (
    <section className="portfolio__gallery">
      <div className="container pg__container">
        <div className="pg__main">
          {
            portfolioGalleryData.map(() => (
              
            ))
          }
        </div>
        <div className="pg__pagination">

        </div>
      </div>
    </section>
  )
}

export default PortfolioGallery