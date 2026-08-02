import React from "react";
import { useT } from "next-i18next/client";
import RoundText from "../ReUsables/RoundText";
import styles from "../../styles/ProjectsPage/projectmid.module.scss";

const ProjectMid = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.pm__section}>
      <div className={`container ${styles.pm__container}`}>
        <div className={styles.pm__one}>
          <div className={styles.left}>
            <RoundText text={t("brief")} color="var(--gold)" />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMid;
