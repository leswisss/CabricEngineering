"use client";

import React from 'react'
import { useInView } from 'react-intersection-observer';
import { TeamSwiper } from '..';
import "../../styles/HomePage/HomeTeam.scss"

const HomeTeam = () => {
  const {ref, inView} = useInView({
    threshold: 0.
    
  })
  return (
    <section className="home__team">
      <div className="container h-team__container">
        <div className="ht__top">
          <span>TEAM</span><span>OUR DEDICATED PROFESSIONALS</span>
        </div>
        <div className="ht__bottom">
          <TeamSwiper/>
        </div>
      </div>
    </section>
  )
}

export default HomeTeam