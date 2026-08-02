import React from "react";
import { StaticImageData } from "next/image";
import ProjectBox from "../ReUsables/ProjectBox";
import { IProject } from "@/utils/type";
import styles from "../../styles/ProjectsPage/projectswrapper.module.scss";

interface ProjectsData {
  name: string;
  year: string;
  location: string;
  type: string;
  image: StaticImageData;
}

const ProjectsWrapper = ({ projects }: { projects: ProjectsData[] }) => {
  return (
    <div className={styles.pro__wrapper}>
      <div className={`container ${styles.pro__container}`}>
        {projects.map((data, i) => (
          <ProjectBox project={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsWrapper;
