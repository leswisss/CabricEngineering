"use client";

import React, {useEffect, useRef} from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import arrowLeftThin from '@iconify/icons-ph/arrow-left-thin';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import "../styles/404.scss"

const NotFoundPage = () => {
  const textRef = [0, 1, 2, 3].map(() => useRef(null));
  const router = useRouter()

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

    const tl2 = gsap.timeline();

    tl2
      .to(textRef[0].current, { y: "0%", duration: 1, ease: "power4" }, 0.1)
      .to(textRef[1].current, { y: "0%", duration: 1, ease: "power4" }, 0.1)
      .to(textRef[2].current, { x: "0%", duration: 1, ease: "power4" }, 0.7)
      .to(textRef[3].current, { x: "0%", duration: 1, ease: "power4" }, 1)
  }, [])
  return (
    <section className="not__found">
      <div className="container not__found-container">
        <div className="not-found__overflow">
          <h3 ref={textRef[0]}>CETTE PAGE</h3>
        </div>
        <div className="not-found__overflow">
          <h3 ref={textRef[1]}>N'EXISTE PAS</h3>
        </div>
        <div className="not__link-container">
          <Link ref={textRef[2]} href="/"><span><Icon icon={arrowLeftThin} /></span>RETOUR À LA PAGE D'ACCEUIL</Link>
          <div ref={textRef[3]} className='route__back' onClick={() => router.back()}><span><Icon icon={arrowLeftThin} /></span>RETOUR À LA PAGE PRÉCÉDENTE</div>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage