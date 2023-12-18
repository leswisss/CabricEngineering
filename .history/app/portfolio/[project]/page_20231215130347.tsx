"use client";

import React from 'react'
import { ProjectHero, ProjectAbout, ProjectHorizontal, ProjectDetails, MoreProjects, Preloader} from '@/components'

const Project = () => {
  return (
    <>
      <ProjectHero />
      <ProjectAbout />
      <ProjectHorizontal/>
      <ProjectDetails />
      <MoreProjects />
    </>
  )
}

export default Project