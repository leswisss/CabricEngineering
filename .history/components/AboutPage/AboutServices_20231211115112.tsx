"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesCard from "../HomePage/ServicesCard";
import { serviceCardData } from "@/utils";
import "../../styles/AboutPage/AboutServices.scss";

const AboutServices = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trigger2Ref = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const ptagRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      animationOne();
      animationTwo()
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
    <section className="about__services">
      <div className="container as__container">
        <div className="asc__top">
          <div className="asc__overflow" ref={trigger2Ref}>
            <span ref={spanRef}>WHAT WE OFFER</span>
          </div>

          <div className="asc__overflow" ref={triggerRef}>
            <p ref={ptagRef}>
              Providing comprehensive support for our projects from inception to
              full implementation is a cornerstone of our approach.
            </p>
          </div>
        </div>
        <div className="asc__bottom">
          {serviceCardData.map((data, i) => (
            <ServicesCard data={data} key={`sc-${i}`} i={} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
