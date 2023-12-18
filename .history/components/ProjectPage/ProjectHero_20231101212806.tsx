import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/project2.jpg"
import "../../styles/ProjectPage/ProjectHero.scss"

const ProjectHero = () => {
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