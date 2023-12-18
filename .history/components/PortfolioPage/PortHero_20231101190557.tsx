"use client";

import React, {useState, useEffect} from 'react'
import "../../styles/PortfolioPage/PortHero.scss"

const PortHero = () => {
  const filters = ["Architecture", "Interior", "Construction"]
  const [activeFilter, setActiveFilter] = useState(0)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, [])
  

  return (
    <section className="portfolio__hero">
      <div className="container ph__container">
        <span className='ph__bold'>PROJECTS</span>
        <div className="portfolio__filter">
          <div className="pf__wrapper">
            {
              filters.map((item, i) => (
                <span className={`${activeFilter===i ? "active__filter" : ""}`} key={`filter-${i}`} onClick={() => setActiveFilter(i)}>{item}</span>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortHero