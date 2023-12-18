"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TeamSwiper } from "..";
import "../../styles/AboutPage/AboutTeam.scss";

const AboutTeam = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trigger2Ref = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const ptagRef = useRef<HTMLParagraphElement>(null);

  return (
    <section className="about__team">
      <div className="container at__container">
        <div className="atc__top">
          <div className="atc__overflow" ref={trigger2Ref}>
            <span ref={spanRef}>OUR TEAM</span>
          </div>

          <div className="atc__overflow" ref={tri}>
            <p>
              Every thriving company including CaBric Engineering is powered by
              a froup of commited individuals. Our Team, with their diverse
              skills and experiences, forms the pillar of our operations.
            </p>
          </div>
        </div>
        <div className="atc__bottom">
          <TeamSwiper />
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
