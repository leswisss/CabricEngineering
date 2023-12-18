import React from 'react'
import TestimonialsSwiper from './TestimonialsSwiper'
import "../../styles/HomePage/Testimonials.scss"

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <div className="tc__top">
          <span>TESTIMONIALS</span>
          <span>REAL PEOPLE, REAL RESULTS</span>
        </div>
        <div className="tc__bottom">
          <Testimonial
        </div>
      </div>
    </section>
  )
}

export default Testimonials