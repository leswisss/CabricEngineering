"use client";

import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesCard from '../HomePage/ServicesCard'
import { serviceCardData } from '@/utils'
import "../../styles/AboutPage/AboutServices.scss"

const AboutServices = () => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const ptagRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
    }, [])
  }, [])
  return (
    <section className="about__services">
      <div className="container as__container">
        <div className="asc__top">
          <span ref={spanRef}>WHAT WE OFFER</span>
          <div className="asc__overflow" ref={triggerRef}>
            <p ref={ptagRef}>Providing comprehensive support for our projects from inception to full implementation is a cornerstone of our approach.</p>
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