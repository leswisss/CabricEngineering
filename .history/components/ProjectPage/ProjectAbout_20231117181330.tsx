"use client";

import React, {useRef, useLayoutEffect, useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/ProjectPage/ProjectAbout.scss";

const ProjectAbout = () => {
  const typeloc = [
    {
      title: "TYPE",
      name: "Residential"
    },
    {
      title: "LOCATION",
      name: "Mvoumagomi"
    }
  ]

  const summary = [
    {
      name: "SQUARE",
      value: "400"
    },
    {
      name: "ARCHITECT",
      value: "CABRIC ENGINEERING"
    },
    {
      name: "INTERIOR",
      value: "SARAH JOHNSON"
    },
  ]

  const ptagRef = useRef<HTMLParagraphElement>(null)
  const trigger1Ref = useRef<HTMLDivElement>(null)
  const trigger2Ref = useRef<HTMLDivElement>(null)
  const trigger3Ref = useRef<HTMLDivElement>(null)
  const ptag2Ref = useRef<HTMLDivElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

      animationOne()
      animationTwo()
    }, [ptagRef, ptag2Ref])

    return () => ctx.revert();
  }, [])

  const animationOne = () => {
    gsap.from(ptagRef.current, {
      y: "100%",

      scrollTrigger: {
        trigger: trigger1Ref.current,
        start: "top+=20px bottom",
        end: "bottom+=100px bottom",
        scrub: 1,
        markers: true
      }
    })
  }

  const animationTwo = () => {
    gsap.from(ptag2Ref.current, {
      y: "100%",

      scrollTrigger: {
        trigger: trigger2Ref.current,
        start: "top+=20px bottom",
        end: "bottom+=50px bottom",
        scrub: 1,
        markers: true
      }
    })
  }

  const animationThree = () => {
    gsap.from(spanRef.current, {
      x: "100%",

      scrollTrigger: {
        trigger: trigger3Ref.current,
        start: "top+=10px bottom",
        end: "bottom+=30px bottom",
        scrub: 1,
        markers: true
      }
    })
  }

  return (
    <section className="about__project">
      <div className="container ap__container">
        <div className="ap__wrapper" >
          <div className="ap__overflow1" ref={trigger1Ref}>
            <p ref={ptagRef}>
              Urban Oasis: A harmonious blend of Architetcure and Nature. The
              Urban Oasis is an Architectural Marvel that seemlessly integrates
              the built in environment with the natural world.
            </p>
          </div>

          <div className="ap__main">
            <div className="ap__overflow" ref={trigger3Ref}>
              <span ref={spanRef}>ABOUT PROJECT</span>
            </div>
            <div className="ap__main-right">
              <div className="ap__overflow" ref={trigger2Ref}>
                <p ref={ptag2Ref}>
                  Situated in the heart of the heart of the city, the Urban Oasis
                  is a sanctuary admist the hustle and bustle. The Project Futures a unique.
                  Urban Oasis: A harmonious blend of Architetcure and Nature.
                  The Urban Oasis is an Architectural Marvel that seemlessly
                  integrates the built in environment with the natural world.
                </p>
              </div>
              <div className="ap__ty-loc">
                {
                  typeloc.map((data, i) => (
                    <div className="ty-loc" key={`ty-loc${i}`}>
                      <span>{data.title}</span><span>{data.name}</span>
                    </div>
                  ))
                }
              </div>
              <div className="about__summary">
                {
                  summary.map((data, i) => (
                    <div className="a__summary" key={`sum-${i}`}>
                      <span>{data.name}</span><span>{data.value}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAbout;
