"use client";

import React from 'react'
import "../../styles/PortfolioPage/PortHero.scss"

const PortHero = () => {
  const filters = ["Architecture", "Interior", "Construction"]
  return (
    <section className="portfolio__hero">
      <div className="container ph__container">
        <span className='ph__bold'>PROJECTS</span>
        <div className="portfolio__filter">
          <div className="pf__wrapper">
            {
              filters.map((item, i) => (
                <span key={`filter-${i}`}>{item}</span>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortHero