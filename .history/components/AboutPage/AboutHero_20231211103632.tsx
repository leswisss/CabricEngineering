"use client";

import React, {useEffect} from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/project1.jpg"
import "../../styles/AboutPage/AboutHero.scss"

const AboutHero = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, [])
  return (
    <section className="abouthero">
      <div className="container about__hero">
        <div className="ah__image">
          <Image src={IMAGE} alt="CaBric Roots" fill quality={100} sizes='(max-width: 600px) 100%, 100$' />
          <span>BORN IN CAMEROON</span>
        </div>
      </div>
    </section>
  )
}

export default AboutHero