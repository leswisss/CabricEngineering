"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { AboutSlideText } from "..";
import Image from "next/image";
import IMAGE from "../../public/images/ceo2.jpg";
import "../../styles/HomePage/AboutCEO.scss";

const AboutCEO = () => {
  const firsttext =
    "Cameroonian-born Tarh Brice, the driving force behind CaBric Engineering, is not just an engineer but a visionary. Currently in his final year of Master's in Civil Engineering, his dedication to his craft is unparalleled. His expertise has not only won him accolades but also the rare honour of being one of the few Camerronian engineers to secure an oversees landmark building project.";

  const secondtext =
    "His commitment to sustainable and innovative design is not just shaping the future of architecture but also redefining it. Tarh's work with Cabric Engineering is a testament to his belief in harmonizing architecture with nature, creating structures that are energy-efficient, visually stunning and are built to last. His vision is not just about building for today, but preserving for tomorrow.";


  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.8
  })

  return (
    <div className="about__ceo">
      <div ref={ref} className="ceo__image">
        <div className="ceo__back-image" style={{
          height: inView ? "100%" : "0%",
          transition: "height 0.5s cubic-bezier(0.87, 0, 0.13, 1)"
        }}></div>
        <div className="ceo__image" style={{
          height: inView ? "100%" : "0%",
          transition: "height 0.5s cubic-bezier(0.87, 0, 0.13, 1)",
          transitionDelay: "0.6s"
          }}>
          <Image
            src={IMAGE}
            fill
            alt="Tarh Brice CEO of CaBric Engineering"
            quality={100}
            sizes="(max-width: 600px) 100%, 100%"
          />
        </div>
      </div>
      <div className="ceo__desc">
        <AboutSlideText firstText={firsttext}/>
        <AboutSlideText firstText={secondtext}/>
      </div>
    </div>
  );
};

export default AboutCEO;
