import React from 'react'
import { TeamSwiper } from '..';
import "../../styles/HomePage/HomeTeam.scss"

// Import Swiper styles
import "swiper/css";

const HomeTeam = () => {
  return (
    <section className="home__team">
      <div className="container h-team__container">
        <div className="ht__top">
          <span>TEAM</span><span>OUR DEDICATED PROFESSIONALS</span>
        </div>
        <div className="ht__bottom">
          <TeamSwiper
        </div>
      </div>
    </section>
  )
}

export default HomeTeam