import React from 'react'
import "../../"

const PortHero = () => {
  return (
    <section className="portfolio__hero">
      <div className="container ph__container">
        <span>PORTFOLIO</span>
        <div className="portfolio__filter">
          <div className="pf__wrapper">
            <span>ARCHITECTURE</span>
            <span>INTERIOR</span>
            <span>CONSTRUCTION</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortHero