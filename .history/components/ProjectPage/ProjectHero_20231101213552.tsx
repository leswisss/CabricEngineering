"use client";

import React, {useEffect} from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/project1.jpg"
import "../../styles/ProjectPage/ProjectHero.scss"

const ProjectHero = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, [])
  
  return (
    <section className="projecthero">
      <div className="container ph__container">
        <span>THE URBAN OASIS</span>
        <div className="ph__image">
          <Image src={IMAGE} alt="Project Image" fill quality={100} sizes='(max-width: 600px) 100%, 100%'/>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero