"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { testimonialsData, swiper2Settings } from "@/utils";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "../../styles/HomePage/TestimonialsSwiper.scss";

// Import Swiper styles
import "swiper/css";

const TestimonialsSwiper = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });

  const [offset, setOffset] = useState(0);
  const [windowWidth, ]

  useEffect(() => {
    const windowWidth = () => {
      const width = window.innerWidth
      const 
    }
  })

  return (
    <div ref={ref}>
      <Swiper
        {...swiper2Settings}
        speed={600}
        onSlideChange={(swiper) => {
          const direction = swiper.activeIndex > swiper.previousIndex ? 1 : -1;
          setOffset((prevOffset) => prevOffset + direction * 15);
        }}
      >
        {testimonialsData.map((data, i) => (
          <SwiperSlide key={`td-${i}`}>
            <div
              className="testi__card-wrapper"
              style={{ width: inView ? "240px" : "150px" }}
            >
              <div className="testimonial__card">
                <div className="testimonial__image">
                  <Image
                    src={data.project}
                    alt="Project Image"
                    quality={100}
                    sizes="(max-width: 600px) 100%, 100%"
                    style={{ objectPosition: `${offset}% center` }}
                  />
                </div>
                <div className="testimonial__main">
                  <div className="testimonial__header">
                    <div className="t-user__image">
                      <Image
                        src={data.image}
                        alt="Customer Image"
                        quality={100}
                        sizes="(max-width: 600px) 100%, 100%"
                      />
                    </div>
                    <p className="t-user__name">{data.name}</p>
                  </div>
                  <p className="testimonial__p">{`"${data.testimonial}"`}</p>
                  <div className="test__cta">
                    <Link href="/">
                      EXPLORE THIS CASE <Icon icon="gridicons:arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSwiper;
