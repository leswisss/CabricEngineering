"use client";

import React, {useRef, useC} from 'react'
import ServicesCard from '../HomePage/ServicesCard'
import { serviceCardData } from '@/utils'
import "../../styles/AboutPage/AboutServices.scss"

const AboutServices = () => {
  return (
    <section className="about__services">
      <div className="container as__container">
        <div className="asc__top">
          <span>WHAT WE OFFER</span>
          <div className="asc__overflow">
            <p>Providing comprehensive support for our projects from inception to full implementation is a cornerstone of our approach.</p>
          </div>
        </div>
        <div className="asc__bottom">
          {
            serviceCardData.map((data, i) => (
              <ServicesCard data={data} key={`sc-${i}`}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AboutServices