"use client";

import React from 'react'
import { useInView } from 'react-intersection-observer';
import { TeamSwiper } from '..';
import "../../styles/HomePage/HomeTeam.scss"

const HomeTeam = () => {
  const {ref, inView} = useInView({
    triggerOnce: false
  })
  return (
    <section className="home__team">
      <div className="container h-team__container">
        <div className="ht__top">
          <span style={{top: inView ? "0" : "90px"}}>TEAM</span><span>OUR DEDICATED PROFESSIONALS</span>
        </div>
        <div className="ht__bottom">
          <TeamSwiper/>
        </div>
      </div>
    </section>
  )
}

export default HomeTeam