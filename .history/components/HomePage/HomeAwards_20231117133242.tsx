"use client";

import React from "react";
import { AwardContent } from "..";
import { useInView } from "react-intersection-observer";
import "../../styles/HomePage/HomeAwards.scss";


const HomeAwards = () => {
  const {ref, inView}  = useInView({
    triggerOnce: false,
  })

  return (
    <section className="home__awards" ref={ref}>
      <div className="container awards__container">
        <div className="ha__top">
          <span style={{top: inView ? "0" : "90px"}}>ACCOLADES</span>
          <span style={{top: inView ? "0" : "90px"}}>AWARDS AND RECOGNITION</span>
        </div>
        <div className="ha__bottom">
          <AwardContent />
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;
