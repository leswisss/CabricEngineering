"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AboutAboutData } from "@/utils";
import IMAGE from "../../public/images/path3.jpg";
import "../../styles/AboutPage/AboutAbout.scss";

const AboutAbout = () => {
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([])
  const trigger2Refs = useRef<(HTMLDivElement | null)[]>([])
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([])
  const ptagRefs = useRef<(HTMLParagraphElement | null)[]>([])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      animationOne();
    }, [spanRefs, ptagRefs]);

    return () => ctx.revert();
  }, []);

  const animationOne = () => {
    spanRefs.current.forEach((el, i) => {
      gsap.from(el, {
        x: "-100%",

        scrollTrigger: {
          trigger: tr
        }
      })
    })
  };

  return (
    <section className="aboutabout">
      <div className="container about__about">
        <div className="aa__left">
          <div className="aabouttext">
            <span>ABOUT US</span>
          </div>
          <div className="aa__image-main">
            <Image
              src={IMAGE}
              alt="About Us"
              sizes="(max-width: 600px) 100%, 100%"
              quality={100}
              fill
            />
          </div>
        </div>
        <div className="aa__right">
          <div className="aa__overflow2">
            <p>CONSTRUCTING A SUSTAINABLE AND ECO-FRIENDLY FUTURE</p>
          </div>

          <div className="aa__content-main">
            {AboutAboutData.map((data, i) => (
              <div className="aa__content-wrapper" key={`aac-${i}`}>
                <div className="aac__overflow" ref={el => triggerRefs.current[i] = el}>
                  <span ref={el => spanRefs.current[i] = el}>{data.name}</span>
                </div>
                <div className="aac__overflow" ref={el => trigger2Refs.current[i] = el}>
                  <p ref={el => ptagRefs.current[i] = el}>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAbout;
