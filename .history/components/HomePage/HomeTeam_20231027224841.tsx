import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { teamData } from '@/utils';
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
        <Swiper>
          {
            teamData.map((data, i) => (
              <SwiperSlide key={`ss-${i}`}>
                <div className="team__content">
                  <div className="team__image">
                    <Image src={data.image} fill alt={`{data.name}}/>
                  </div>
                  <div className="team__data">

                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default HomeTeam