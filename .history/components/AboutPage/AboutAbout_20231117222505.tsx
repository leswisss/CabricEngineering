"use client";

import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'  
import { AboutAboutData } from '@/utils'
import IMAGE from "../../public/images/path3.jpg"
import "../../styles/AboutPage/AboutAbout.scss"

const AboutAbout = () => {
  const spanRef = useRef<HTMLSpanElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const ptagRef = useRef<HTMLParagraphElement>(null)
  const trigger2Ref = useRef<HTMLDivElement>(null)


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

      animationOne()
    }, [])

    return () => ctx.revert()
  }, [])


  const animationOne = () => {
    gsap.from(spanRef.current, {
      x: "-100%",

      scrollTrigger: {
        
      }
    })
  }

  return (
    <section className="aboutabout">
      <div className="container about__about">
        <div className="aa__left">
          <div className="aabouttext" ref={triggerRef}>
            <span ref={spanRef}>ABOUT US</span>
          </div>
          <div className="aa__image-main">
            <Image src={IMAGE} alt='About Us' sizes='(max-width: 600px) 100%, 100%' quality={100} fill/>
          </div>
        </div>
        <div className="aa__right">
          <div className="aa__overflow2" ref={trigger2Ref}>
            <p ref={ptagRef}>CONSTRUCTING A SUSTAINABLE AND ECO-FRIENDLY FUTURE</p>
          </div>

          <div className="aa__content-main">
            {
              AboutAboutData.map((data, i) => (
                <div className="aa__content-wrapper" key={`aac-${i}`}>
                  <div className="aac__overflow">
                    <span>{data.name}</span>
                  </div>
                  <div className="aac__overflow">
                    <p>{data.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAbout