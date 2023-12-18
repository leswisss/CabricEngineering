import React from 'react'
import { AnimatedPhrase, AboutCEO } from '..'
import "../../styles/HomePage/AboutHome.scss"

const AboutHome = () => {
  return (
    <section className="about__home">
      <div className="container h-about__container">
        <AnimatedPhrase />
        <AboutCEO /> 
      </div>
    </section>
  )
}

export default AboutHome