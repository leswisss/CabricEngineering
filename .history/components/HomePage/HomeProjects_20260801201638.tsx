import React from "react";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import RoundText from "../ReUsables/RoundText";
import IMAGE from "../../public/images/DONE_9 - Photo.jpg";
import IMAGE2 from "../../public/images/05.jpg";
import IMAGE3 from "../../public/images/03.jpg";
import IMAGE4 from "../../public/images/023.jpg";
import ProjectBox from "../ReUsables/ProjectBox";
import { IProject } from "@/utils/type";
import styles from "../../styles/HomePage/homeprojects.module.scss";

const HomeProjects = ({ projects }: { projects: IProject[] }) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.hp__section}>
      <div className={`container ${styles.hp__container}`}>
        <div className={styles.hp__top}>
          <div className={styles.round}>
            <RoundText color="var(--gold)" text={t("home:featured")} />
          </div>
          <div className={styles.hptop}>
            <p className={styles.hp__p}>{t("home:feaone")}</p>
            <div className={styles.buttonner}>
              <Button
                text={t("home:feacta")}
                backColor="black"
                hbackColor="var(--gold)"
                textColor="white"
                thColor="white"
                link={currentLng === "en" ? "/portfolio" : "/fr/portfolio"}
              />
            </div>
          </div>
        </div>
        <div className={styles.hp__bottom}>
          {projects.map((data, i) => (
            <ProjectBox project={data} key={i} />
          ))}
        </div>
        <div className={styles.buttonner}>
              <Button
                text={t("home:feacta")}
                backColor="black"
                hbackColor="var(--gold)"
                textColor="white"
                thColor="white"
                link={currentLng === "en" ? "/portfolio" : "/fr/portfolio"}
              />
            </div>
      </div>
    </div>
  );
};

export default HomeProjects;
