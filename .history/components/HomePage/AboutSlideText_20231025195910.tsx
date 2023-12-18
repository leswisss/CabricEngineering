"use client";

import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSlideText = () => {
  const refs1 = useRef<HTMLElement[]>([]);

  const refs1Container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    createAnimations()
  }, [])

  const createAnimations = () => {
    gsap.to(refs1.current, {
      top: "0%",
      ease: "none",
      stagger: 0.1,
      scrollTrigger: {
        trigger: refs1Container.current,
        start: "top+=50px bottom",
        end: "bottom+=100px bottom",
        scrub: true,
      }
    })}

  return (
    <div ref={refs1Container} className="first__text">{splitwords(firsttext)}</div>
  )
}

export default AboutSlideText