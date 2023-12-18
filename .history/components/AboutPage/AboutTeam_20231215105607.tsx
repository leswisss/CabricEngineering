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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      if (ptagRef.current && spanRef.current) {
        animationOne();
        animationTwo();
      }
    }, [ptagRef, spanRef]);

    return () => ctx.revert();
  }, []);

  const animationOne = () => {
    gsap.from(ptagRef.current, {
      y: "100%",

      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top+=20px bottom",
        end: "top+=200px bottom",
        scrub: 1,
      },
    });
  };

  const animationTwo = () => {
    gsap.from(spanRef.current, {
      x: "-100%",

      scrollTrigger: {
        trigger: trigger2Ref.current,
        start: "top+=20px bottom",
        end: "top+=200px bottom",
        scrub: 1,
      },
    });
  };

  return (
    <section className="about__team">
      <div className="container at__container">
        <div className="atc__top">
          <div className="atc__overflow" ref={trigger2Ref}>
            <span ref={spanRef}>OUR TEAM</span>
          </div>

          <div className="atc__overflow" ref={triggerRef}>
            <p ref={ptagRef}>
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
