import React from 'react'
import { PortfolioContent } from '..'
import "../../styles/HomePage/HomePortfolio.scss"

const HomePortfolio = () => {
  const {ref, inView} = useInView({
    triggerOnce: false
  })

  return (
    <section className="home__portfolio">
      <div className="container h-portfolio__container">
        <div className="hp__top">
          <div className="hp-left">
            <span className="hp-subtitle">PROJECTS</span>
            <span className="hp-title">SELECTED WORKS</span>
          </div>
          <div className="hp-right">
            <span>[PORTFOLIO]</span>
            <span>20</span>
          </div>
        </div>
        <div className="hp__bottom">
          <PortfolioContent />
        </div>
      </div>
    </section>
  )
}

export default HomePortfolio