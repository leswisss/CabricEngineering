import React from 'react'
import { useInView } from "react-intersection-observer";
import TestimonialsSwiper from './TestimonialsSwiper'
import "../../styles/HomePage/Testimonials.scss"

const Testimonials = () => {
  const {ref, inView}  = useInView({
    triggerOnce: false,
  })

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <div className="tc__top">
          <span>TESTIMONIALS</span>
          <span>REAL PEOPLE, REAL RESULTS</span>
        </div>
        <div className="tc__bottom">
          <TestimonialsSwiper/>
        </div>
      </div>
    </section>
  )
}

export default Testimonials