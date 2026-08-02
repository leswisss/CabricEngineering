import React from 'react'
import { IProject } from "@/utils/type";
import styles from "../../styles/ProjectsPage/projecthero.module.scss"

const ProjectHero = ({ project }: { project: IProject }) => {
  return (
    <div className={styles.project__hero}>

    </div>
  )
}

export default ProjectHero