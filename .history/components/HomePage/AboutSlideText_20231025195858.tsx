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

  return (
    <div ref={refs1Container} className="first__text">{splitwords(firsttext)}</div>
  )
}

export default AboutSlideText