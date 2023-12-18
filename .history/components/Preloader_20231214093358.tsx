import React from 'react'
import { usePathname } from 'next/navigation';
import "../styles/Preloader.scss"

const Preloader = () => {
  const cabric = "CABRIC"
  const array = cabric.split("")
  const slogan = "SUSTAINABLE & ECO-FRIENDLY CONSTRUCTION"
  const array2 = slogan.split(" ")
  const pathname = usePathname()

  return (
    <section className="preloader">
      <div className="preloader__text">
      <div className="home__active" style={{display: pathname==="/" && isInitial ? "block" : "none"}}>
          <div className="preload__overflow">
            <h3>
              {
                array.map((letter, i) => (
                  <motion.span variants={preloaderTextAnim} custom={i} initial="initial" animate="entry" exit="exit" key={`sy${i}`}>{letter}</motion.span>
                ))
              }
            </h3>
          </div>
          <div className="preload__overflow">
            <p>
            {
                array2.map((word, i) => (
                  <motion.span variants={preloaderText2Anim} custom={i} initial="initial" animate="entry" exit="exit" key={`w${i}`}>{word}</motion.span>
                ))
              }
            </p>
          </div>
        </div>
      </div>
      <div className="preloader__overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </section>
  )
}

export default Preloader