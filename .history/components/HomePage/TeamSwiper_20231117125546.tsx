"use client";

import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { teamData } from "@/utils";
import "../../styles/HomePage/TeamSwiper.scss";

// Import Swiper styles
import "swiper/css";

const TeamSwiper = () => {
  const {ref, inView} = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })
  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className="t-swiper__buttons">
        <span
          className="t-swiper__button t-button-1"
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="61"
            viewBox="0 0 8 61"
            fill="none"
          >
            <path
              d="M3.64645 60.3536C3.84171 60.5488 4.15829 60.5488 4.35355 60.3536L7.53553 57.1716C7.7308 56.9763 7.7308 56.6597 7.53553 56.4645C7.34027 56.2692 7.02369 56.2692 6.82843 56.4645L4 59.2929L1.17157 56.4645C0.976311 56.2692 0.659728 56.2692 0.464466 56.4645C0.269204 56.6597 0.269204 56.9763 0.464466 57.1716L3.64645 60.3536ZM3.5 0L3.5 60H4.5L4.5 0L3.5 0Z"
              fill="black"
            />
          </svg>
        </span>
        <span
          className="t-swiper__button t-button-2"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="61"
            viewBox="0 0 8 61"
            fill="none"
          >
            <path
              d="M3.64645 60.3536C3.84171 60.5488 4.15829 60.5488 4.35355 60.3536L7.53553 57.1716C7.7308 56.9763 7.7308 56.6597 7.53553 56.4645C7.34027 56.2692 7.02369 56.2692 6.82843 56.4645L4 59.2929L1.17157 56.4645C0.976311 56.2692 0.659728 56.2692 0.464466 56.4645C0.269204 56.6597 0.269204 56.9763 0.464466 57.1716L3.64645 60.3536ZM3.5 0L3.5 60H4.5L4.5 0L3.5 0Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
    );
  };
  return (
    <div ref={ref}>
      <Swiper slidesPerView={4.2} speed={600} className="t-swiper">
        <SwiperButtons />
        {teamData.map((data, i) => (
          <SwiperSlide key={`ss-${i}`}>
            <div className="team__content" style={{height: inView ? "max-content" : 0, transition: "height 0.7s cubic-bezier(0.76, 0, 0.24, 1)", transitionDelay: `${0.1*i}s`}}>
              <div className="team__image">
                <Image
                  src={data.image}
                  fill
                  alt={data.name}
                  quality={100}
                  sizes="(max-width: 600px) 100%, 100%"
                />
              </div>
              <div className="team__data">
                <p>{data.name}</p>
                <div className="team__post">
                  <span></span> <p>{data.post}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSwiper;
