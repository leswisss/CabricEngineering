import React from 'react'
import ServicesCard from './ServicesCard'
import { serviceCardData } from '@/utils'
import { useInView } from "react-intersection-observer"
import "../../styles/HomePage/HomeServices.scss"

const HomeServices = () => {
  
  return (
    <section className="home__services">
      <div className="container services__container">
        <div className="top__services">
          <div className="top__left">
            <span className="s-subtitle">SERVICES</span>
            <span className="s-title">FROM IDEA <br />TO IMPLEMENTATION</span>
          </div>
          <div className="top__right">
            <p>Providing comprehensive support for our projects from inception to full implementation is a cornerstone of our approach.</p>
          </div>
        </div>
        <div className="bottom__services">
          {
            serviceCardData.map((data, i) => (
              <ServicesCard key={`sc-${i}`} data={data}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HomeServices