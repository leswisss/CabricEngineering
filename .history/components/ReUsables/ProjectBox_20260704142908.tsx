import React from "react";
import styles from "../../styles/ReUsables/projectbox.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


interface ProjectData {
  name: string;
  year: string;
  location: string;
  type: string;
  image: StaticImport;
}

const ProjectBox = ({ project }: { project: ProjectData }) => {
  return (
    <div className={styles.projectbox}>
      <div className={styles.pb__top}>
        <div className={styles.pbtop}>
          <div className={styles.pbt__left}>
            <span>{project.type}</span>
            <span>{project.location}</span>
          </div>
          <span>{data.}</span>
        </div>
      </div>
      <div className={styles.pb__bottom}></div>
    </div>
  );
};

export default ProjectBox;
