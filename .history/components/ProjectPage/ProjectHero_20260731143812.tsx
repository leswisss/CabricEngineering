import React from "react";
import { IProject } from "@/utils/type";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import styles from "../../styles/ProjectsPage/projecthero.module.scss";

const ProjectHero = ({ project }: { project: IProject }) => {
  
  
  return (
    <div className={styles.project__hero}>
      <div className={styles.image__wrapper}>
        <div className={styles.imagee}>
          <Image
            alt={
              project.mainimage.alt
                ? project.mainimage.alt
                : `CaBric Engineering - ${project.name} - Architecture Project`
            }
            fill
            quality={100}
            src={
              urlFor(project.mainimage).width(1920).url() ||
              urlFor(project.mainimage).url()
            }
            sizes="100vw"
          />
        </div>
        <div className={styles.image__grad}></div>
      </div>
      <div className={styles.project__data}>
        <div className={`container ${styles.pd__container}`}>
          <div className={styles.pd__foot}>
            <span className={styles.pb__span}>
              {currentLng === "en"
                ? project.location.locationen
                : project.location.locationfr}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
