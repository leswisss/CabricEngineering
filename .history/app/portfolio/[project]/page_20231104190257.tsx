import React from 'react'
import { ProjectHero, ProjectAbout, ProjectHorizontal, ProjectDetails } from '@/components'

const Project = () => {
  return (
    <>
      <ProjectHero />
      <ProjectAbout />
      {/* <ProjectHorizontal/> */}
      <ProjectDetails/>
    </>
  )
}

export default Project