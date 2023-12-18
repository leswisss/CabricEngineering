"use client";

import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AwardContent } from '..'
import "../../styles/AboutPage/AboutAccolades.scss"

const AboutAccolades = () => {
  return (
    <section className="aboutaccolades">
      <div className="container about__accolades">
        <div className="aac__overflow">
          <span>ACCOLADES</span>
        </div>
        <AwardContent/>
      </div>
    </section>
  )
}

export default AboutAccolades