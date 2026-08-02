import React from 'react'
import { IProject } from "@/utils/type";
import Image from 'next/image';
import styles from "../../styles/ProjectsPage/projecthero.module.scss"

const ProjectHero = ({ project }: { project: IProject }) => {
  return (
    <div className={styles.project__hero}>
      <div className={styles.image__wrapper}>
        <div className={styles.imagee}>

        </div>
      </div>
    </div>
  )
}

export default ProjectHero