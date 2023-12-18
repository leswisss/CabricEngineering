"use client";

import React, {useEffect} from 'react'
import "../../styles/HomePage/Hero.scss"
import { InfiniteMarquee, HomeImage } from '..'

const HomeHero = () => {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, [])
  
  return (
    <section className="home">
      <div className="home__container">
        <div className="container">
          <h3>
            Global Architectural Company Building An<br/>Eco-Friendly Future Through Innovative Techniques
          </h3>
          <h4>
            Global Architectural Company Building An Eco-Friendly Future Through Innovative Techniques
          </h4>
        </div>
        <InfiniteMarquee />
        <HomeImage/>
      </div>
    </section>
  )
}

export default HomeHero