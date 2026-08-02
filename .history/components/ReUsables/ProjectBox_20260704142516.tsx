import React from 'react'
import Stat
import styles from "../../styles/ReUsables/projectbox.module.scss"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'


interface ProjectData {
  name: string,
  year: string,
  location: string,
  type: string,
  image: StaticImport,
}

const ProjectBox = ({project}: {project: }) => {
  return (
    <div>ProjectBox</div>
  )
}

export default ProjectBox