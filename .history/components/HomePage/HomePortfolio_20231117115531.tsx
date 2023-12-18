import React from 'react'
import { PortfolioContent } from '..'
import { useInView } from "react-intersection-observer"
import "../../styles/HomePage/HomePortfolio.scss"

const HomePortfolio = () => {
  const {ref, inView} = useInView({
    triggerOnce: false
  })

  return (
    <section className="home__portfolio" ref={r}>
      <div className="container h-portfolio__container">
        <div className="hp__top">
          <div className="hp-left">
            <span className="hp-subtitle" style={{top: inView ? "0" : "90px"}}>PROJECTS</span>
            <span className="hp-title" style={{top: inView ? "0" : "90px"}}>SELECTED WORKS</span>
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