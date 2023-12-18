"use client";

import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { MoreProjectsData } from '@/utils';
import "../../styles/ProjectPage/MoreProjects.scss"

// Import Swiper styles
import "swiper/css";

const MoreProjects = () => {
  const {ref, inView} = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })
  
  return (
    <section className="more__projects">
      <div className="container mp__container">
        <div className="mp__title">
          <span>OTHER PROJECTS</span>
        </div>
        <Swiper slidesPerView={3.5} className='mp-swiper' speed={1000}>
          {
            MoreProjectsData.map((data, i) => (
              <SwiperSlide key={`mp-${i}`}>
                <Link className="mp__slide" href={data.link}>
                  <Image src={data.image} alt={data.name} fill quality={100} sizes='(max-width: 600px) 100%, 100%'/>
                  <span>{data.name}</span>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default MoreProjects