import React from "react";
import { useT } from "next-i18next/client";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/ReUsables/projectbox.module.scss";
import { urlFor } from "@/sanity/lib/image";
import { IProject } from "@/utils/type";

const ProjectBox = ({ project }: { project: IProject }) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <Link
      href={
        currentLng === "en"
          ? `/portfolio/${project.slug.current}`
          : `/fr/portfolio/${project.slug.current}`
      }
      className={styles.projectbox}
    >
      <div className={styles.pb__top}>
        <div className={styles.pbtop}>
          <div className={styles.pbt__left}>
            <span className={styles.pb__span}>
              {currentLng === "en"
                ? project.clienttype.nameen
                : project.clienttype.namefr}
            </span>
            <span className={styles.pb__span}>
              {currentLng === "en"
                ? project.location.locationen
                : project.location.locationfr}
            </span>
          </div>
          <span className={styles.pb__span}>
            {currentLng === "en" ? project.year.yearen : project.year.yearfr}
          </span>
        </div>
        <h3 className={styles.pb__name}>{project.name}</h3>
      </div>
      <div className={styles.pb__bottom}>
        <div className={styles.pb__image}>
          <Image
            alt={project.mainimage.alt ? project.mainimage.alt : proje}
            fill
            // placeholder="blur"
            quality={100}
            src={
              urlFor(project.mainimage).width(1920).url() ||
              urlFor(project.mainimage).url()
            }
            sizes="(max-width: 750px) 100vw, 60vw"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectBox;
