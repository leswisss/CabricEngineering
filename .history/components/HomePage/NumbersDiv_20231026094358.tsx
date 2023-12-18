"use client";

import React, {useRef, useEffect} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { numbersProps } from '@/types'
import "../../styles/HomePage/NumbersDiv.scss"

const NumbersDiv = ({data} : {data: numbersProps}) => {
  const ref = useRef<HTMLDivElement>(null)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    createAnimations()
  }, [])

  const createAnimations = () => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 50%",
        end: "bottom 50%",
        
      }
    })
  }

  return (
    <div className='numbers__div'>
      <div className="left__section">
        <div className="a-number">{data.number}</div>
        <span>{data.name}</span>
      </div>
      <div className="right__section">
        <p>
          {data.text}
        </p>
      </div>
    </div>
  )
}

export default NumbersDiv