import React from 'react'
import { usePathname } from 'next/navigation';
import "../styles/Preloader.scss"

const Preloader = () => {
  const systems = "CABRIC"
  const array = systems.split("")
  const slogan = "SUSTAINABLE & ECO-FRIENDLY CONSTRUCTION"
  const array2 = slogan.split(" ")
  const pathname = usePathname()

  return (
    <section className="preloader">
      <div className="preloader__text">

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