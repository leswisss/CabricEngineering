import React from "react";
import { useT } from "next-i18next/client";
import { IProject } from "@/utils/type";
import RoundText from "../ReUsables/RoundText";
import styles from "../../styles/ProjectsPage/projectmid.module.scss";

const ProjectMid = ({ project }: { project: IProject }) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.pm__section}>
      <div className={`container ${styles.pm__container}`}>
        <div className={styles.pm__one}>
          <div className={styles.left}>
            <RoundText text={t("brief")} color="var(--gold)" />
          </div>
          <div className={`${styles.right} ${styles.pmo__right}`}>
            <h3 className={styles.pmo__h3}>
              {currentLng === "en"
                ? project.intro.introen
                : project.intro.introfr}
            </h3>
            <p className={styles.pmo__p}>
              {currentLng === "en"
                ? project.brief.briefen
                : project.brief.brieffr}
            </p>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectMid;
