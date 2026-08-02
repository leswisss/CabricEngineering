import React from 'react'
import styles from "../../styles/ReUsables/projectbox.module.scss"


interface ProjectData {
  name: string,
  year: string,
  location: string,
  type: "Private Individual",
  image: IMAGE3,
}

const ProjectBox = ({project}: {project: }) => {
  return (
    <div>ProjectBox</div>
  )
}

export default ProjectBox