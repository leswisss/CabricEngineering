"use client";

import React, { useState } from "react";
import {
  Swiper as SwiperComponent,
  SwiperSlide,
  useSwiper,
} from "swiper/react";
import { useInView } from "react-intersection-observer";
import { Swiper } from "swiper";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { portfolioContentData } from "@/utils";
import "../../styles/HomePage/PortfolioContent.scss";

// Import Swiper styles
import "swiper/css";

const PortfolioContent = () => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const {ref, inView} = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className="swiper__buttons">
        <span
          className="swiper__button button-1"
          onClick={() => {
            swiper.slidePrev();
            setActiveSlide(swiper.activeIndex);
          }}
        >
          <Icon icon="solar:arrow-left-linear" />
        </span>
        <span
          className="swiper__button button-2"
          onClick={() => {
            swiper.slideNext();
            setActiveSlide(swiper.activeIndex);
          }}
        >
          <Icon icon="solar:arrow-right-linear" />
        </span>
      </div>
    );
  };

  return (
    <div className="portfolio__content" ref={ref}>
      <div className="pc-top">
        <div className="portfolio__swiper">
          <SwiperComponent
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.activeIndex);
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            <div className="pi__details position__absolute">
              <div className="pid-top">
                <div className="project__overflow">
                  <div
                    className="project__name"
                    style={{ transform: `translateY(${-activeSlide * 100}%)` }}
                  >
                    {portfolioContentData.map((data, i) => (
                      <p key={`pn-${i}`}>
                        {data.name} <span>[{data.category}]</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="project__overflow">
                  <div
                    className="project__location"
                    style={{ transform: `translateY(${-activeSlide * 100}%)` }}
                  >
                    {portfolioContentData.map((data, i) => (
                      <span key={`pl-${i}`}>{data.location}</span>
                    ))}
                  </div>
                </div>
                <div className="project__overflow">
                  <div
                    className="project__year"
                    style={{ transform: `translateY(${-activeSlide * 100}%)` }}
                  >
                    {portfolioContentData.map((data, i) => (
                      <span key={`py-${i}`}>{data.year}</span>
                    ))}
                  </div>
                </div>
              </div>
              <SwiperButtons />
            </div>
            {portfolioContentData.map((data, i) => (
              <SwiperSlide key={`ss-${i}`}>
                <div className="project__image">
                  <Image
                    src={data.image}
                    fill
                    quality={100}
                    alt={data.name}
                    sizes="(max-width: 600px) 100%, 100%"
                  />
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
        <div className="portfolio__images">
          <div className="port__image-left">
            <div className="pimage__overlay">
              <Link href="/">
                <span>DISCOVER</span>
              </Link>
            </div>
            {portfolioContentData.map((data, i) => (
              <div
                className="psecond__image"
                key={`ps-${i}`}
                style={{ opacity: activeSlide === i ? 1 : 0 }}
              >
                <Image
                  src={data.image2}
                  fill
                  quality={100}
                  alt={data.name}
                  sizes="(max-width: 600px) 100%, 100%"
                />
              </div>
            ))}
          </div>
          <div className="port__image-right">
            <div className="pimage__overlay">
              <div className="pn__swiper">
                <div
                  className="pn__swrapper"
                  style={{ transform: `translateY(${-activeSlide * 100}%)` }}
                >
                  {portfolioContentData.map((data, i) => (
                    <span key={`pn2-${i}`}>{data.name}</span>
                  ))}
                </div>
              </div>
            </div>
            {portfolioContentData.map((data, i) => (
              <div
                className="pthird__image"
                key={`pt-${i}`}
                style={{ opacity: activeSlide === i ? 1 : 0 }}
              >
                <Image
                  src={data.image3}
                  fill
                  quality={100}
                  alt={data.name}
                  sizes="(max-width: 600px) 100%, 100%"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pc-bottom">
        <div className="pcb__left">
          <div className="link__button">
            <Link href="/">
              <span>VIEW PORTFOLIO</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="121"
                viewBox="0 0 8 121"
                fill="none"
              >
                <path
                  d="M3.64645 120.354C3.84171 120.549 4.15829 120.549 4.35355 120.354L7.53553 117.172C7.7308 116.976 7.7308 116.66 7.53553 116.464C7.34027 116.269 7.02369 116.269 6.82843 116.464L4 119.293L1.17157 116.464C0.976311 116.269 0.659728 116.269 0.464466 116.464C0.269204 116.66 0.269204 116.976 0.464466 117.172L3.64645 120.354ZM3.5 0L3.5 120H4.5L4.5 0L3.5 0Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="pcb__right">
          {portfolioContentData.map((data, i) => (
            <div
              className="project__selector"
              key={`ps-${i}`}
              style={{ opacity: activeSlide === i ? 0.5 : 1 }}
              onClick={() => {
                setActiveSlide(i);
                if (swiper) {
                  swiper.slideTo(i); // Slide to the specific index
                }
              }}
            >
              <span>{data.name}</span> <span>{data.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
