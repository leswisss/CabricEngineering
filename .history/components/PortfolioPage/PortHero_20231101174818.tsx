"use client"

import React from 'react'
import "../../styles/PortfolioPage/PortHero.scss"

const PortHero = () => {
  return (
    <section className="portfolio__hero">
      <div className="container ph__container">
        <span className='ph__bold'>PROJECTS</span>
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