"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AwardContent } from '..'
import "../../styles/AboutPage/AboutAccolades.scss"

const AboutAccolades = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      animationOne();
    }, spanRef);

    return () => ctx.revert();
  }, []);

  const animationOne = () => {
    gsap.from(spanRef.current, {
      x: "-100%",

      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top+=20px bottom",
        end: "top+=200px bottom",
        scrub: 1,
      },
    });
  };
  return (
    <section className="aboutaccolades">
      <div className="container about__accolades">
        <div className="aac__overflow">
          <span ref={spa}>ACCOLADES</span>
        </div>
        <AwardContent/>
      </div>
    </section>
  )
}

export default AboutAccolades