"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { svgData } from "@/utils";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import IMAGE from "../../public/images/solarhouse.jpg";
import "../../styles/HomePage/HeroImage.scss";

const HomeImage = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const spotlightRefs = useRef(new Array(5).fill(null));
  const pathRefs = useRef(new Array(5).fill(null));
  const textRefs = useRef(new Array(5).fill(null));
  const dragRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the width
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    spotlightRefs.current = spotlightRefs.current.slice(0, 5);
    pathRefs.current = pathRefs.current.slice(0, 5);
    textRefs.current = textRefs.current.slice(0, 5);

    const tl = gsap.timeline();
    spotlightRefs.current.forEach((spotlightRef, i) => {
      const pathRef = pathRefs.current[i];
      const textRef = textRefs.current[i];

      if (inView && spotlightRef && pathRef && textRef) {
        const length = (pathRef as SVGPathElement).getTotalLength();
        gsap.set(pathRef, {
          strokeDasharray: length,
          strokeDashoffset: length,
          stroke: "white",
        });

        tl.to(spotlightRef, { duration: 0.6, opacity: 1, ease: "power1.inOut" })
          .to(pathRef, {
            duration: 1,
            strokeDashoffset: 0,
            stroke: "white",
            ease: "cubic-bezier(0.87, 0, 0.13, 1)",
          })
          .to(textRef, { duration: 0.6, opacity: 1, ease: "power1.inOut" });
      }
    });
  }, [inView]);

  useEffect(() => {
    if (windowWidth < 900) {
      if (inView) {
        console.log(1)
        gsap.to(dragRef.current, { autoAlpha: 1 }); // Show the div
      } else {
        console.log(0)
        gsap.to(dragRef.current, { autoAlpha: 0 }); // Hide the div
      }
    }
  }, [inView, windowWidth])

  return (
    <>
      <div className="container heroimage__container">
        <div className="hero__image-slider" ref={ref}>
          <div className="hero__image-wrapper">
            <div className="hero__image">
              <Image
                src={IMAGE}
                fill
                quality={100}
                sizes="100%"
                alt="An eco-friendly home"
              />
            </div>

            {svgData.map((data, i) => (
              <div className={`room__anim ra-${i + 1}`} key={`svg-${i}`}>
                <div
                  className="spotlight"
                  ref={(ref) => (spotlightRefs.current[i] = ref)}
                >
                  <span></span>
                </div>
                <div className="spot__text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={`${data.width}`}
                    height={`${data.height}`}
                    viewBox={`0 0 ${data.width} ${data.height}`}
                    fill="none"
                  >
                    <path
                      d={data.path}
                      stroke="transparent"
                      ref={(ref) => (pathRefs.current[i] = ref)}
                    />
                  </svg>
                  <span ref={(ref) => (textRefs.current[i] = ref)}>
                    {data.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sscroll-guide" ref={dragRef}>
          <span>DRAG</span>
        </div>
      </div>
    </>
  );
};

export default HomeImage;
