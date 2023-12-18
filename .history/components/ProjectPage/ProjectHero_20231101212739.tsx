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
          <Image src={IMAGE} alt="Project Image" />
        </div>
      </div>
    </section>
  )
}

export default ProjectHero