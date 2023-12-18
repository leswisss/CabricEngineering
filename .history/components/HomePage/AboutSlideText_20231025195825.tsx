"use client";

import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSlideText = () => {
  return (
    <div ref={refs1Container} className="first__text">{splitwords(firsttext)}</div>
  )
}

export default AboutSlideText