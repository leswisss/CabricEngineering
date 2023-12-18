import React from 'react'
import PortfolioImage from './PortfolioImage'
import "../../styles/PortfolioPage/PortfolioGallery.scss"

const PortfolioGallery = () => {
  return (
    <section className="portfolio__gallery">
      <div className="container pg__container">
        <div className="pg__main">
        <PortfolioImage />
        </div>
      </div>
    </section>
  )
}

export default PortfolioGallery