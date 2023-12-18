"use client";

import React, {use} from 'react'
import { ProjectHero, ProjectAbout, ProjectHorizontal, ProjectDetails, MoreProjects, Preloader} from '@/components'

const Project = () => {
  const [onComplete1, setOnComplete1] = useState(false);
  const [onComplete2, setOnComplete2] = useState(false);

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