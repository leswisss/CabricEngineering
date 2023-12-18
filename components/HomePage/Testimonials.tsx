"use client";

import React from 'react'
import { useInView } from "react-intersection-observer";
import TestimonialsSwiper from './TestimonialsSwiper'
import "../../styles/HomePage/Testimonials.scss"

const Testimonials = () => {
  const {ref, inView}  = useInView({
    triggerOnce: false,
  })

  return (
    <section className="testimonials" ref={ref}>
      <div className="container testimonials__container">
        <div className="tc__top">
          <span style={{top: inView ? "0" : "90px"}}>TESTIMONIALS</span>
          <span style={{top: inView ? "0" : "90px"}}>REAL PEOPLE, REAL RESULTS</span>
        </div>
        <div className="tc__bottom">
          <TestimonialsSwiper/>
        </div>
      </div>
    </section>
  )
}

export default Testimonials