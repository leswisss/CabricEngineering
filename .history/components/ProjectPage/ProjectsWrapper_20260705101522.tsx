import React from "react";
import { StaticImageData } from "next/image";
import styles from "../../styles/ProjectsPage/projectswrapper.module.scss"

interface ProjectsData {
  name: string;
  year: string;
  location: string;
  type: string;
  image: StaticImageData;
}

const ProjectsWrapper = ({ projects }: { projects: ProjectsData[] }) => {
  return <div className={style}>
    
  </div>;
};

export default ProjectsWrapper;
