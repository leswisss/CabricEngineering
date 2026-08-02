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
        <div className={styles.pm__two}>
          <div className={styles.left}>
            <RoundText text={t("snapshot")} color="var(--gold)" />
          </div>
          <div className={`${styles.right} ${styles.pmt__right}`}>
            <div className={styles.pmt__wrap}>
              <span className={styles.pmt__span}>{t("client")}</span>
              <div className={styles.pmt__left}>
                <span>
                  {currentLng === "en"
                    ? project.clienttype.nameen
                    : project.clienttype.namefr}
                </span>
              </div>
            </div>
            <div className={styles.pmt__wrap}>
              <span className={styles.pmt__span}>{t("location")}</span>
              <div className={styles.pmt__left}>
                <span>
                  {currentLng === "en"
                    ? project.location.locationen
                    : project.location.locationfr}
                </span>
              </div>
            </div>
            <div className={styles.pmt__wrap}>
              <span className={styles.pmt__span}>{t("areaf")}</span>
              <div className={styles.pmt__left}>
                <span>{project.area} m²</span>
              </div>
            </div>
            {project.rooms && (
              <div className={styles.pmt__wrap}>
                <span className={styles.pmt__span}>{t("rooms")}</span>
                <div className={styles.pmt__left}>
                  {project.rooms.map((room, i) => (
                    <span key={i}>
                      {currentLng === "en" ? room.roomen : room.roomfr}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.features && (
              <div className={styles.pmt__wrap}>
                <span className={styles.pmt__span}>{t("features")}</span>
                <div className={styles.pmt__left}>
                  {project.features.map((feature, i) => (
                    <span key={i}>
                      {currentLng === "en"
                        ? feature.featureen
                        : feature.featurefr}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.year && (
              <div className={styles.pmt__wrap}>
                <span className={styles.pmt__span}>{t("year")}</span>
                <div className={styles.pmt__left}>
                  {project.year.map((year, i) => (
                    <span key={i}>
                      {currentLng === "en" ? year.yearen : year.yearfr}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.units && (
              <div className={styles.pmt__wrap}>
                <span className={styles.pmt__span}>{t("units")}</span>
                <div className={styles.pmt__left}>
                  {project.units.map((unit, i) => (
                    <span key={i}>
                      {currentLng === "en" ? unit.unitsen : unit.unitsfr}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.floors && (
              <div className={styles.pmt__wrap}>
                <span className={styles.pmt__span}>{t("floorss")}</span>
                <div className={styles.pmt__left}>{project.floors}</div>
              </div>
            )}
            <div className={styles.pmt__wrap}>
              <span className={styles.pmt__span}>{t("status")}</span>
              <div className={styles.pmt__left}>
                <span>
                  {currentLng === "en"
                    ? project.status.statusen
                    : project.status.statusfr}
                </span>
              </div>
            </div>
            {project.services && (
              <div className={styles.pmt__wrap}>
                <span className={styles.pmt__span}>Services</span>
                <div className={styles.pmt__left}>
                  {project.services.map((service, i) => (
                    <span key={i}>
                      {currentLng === "en" ? service.nameen : service.namefr}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.}>

        </div>
      </div>
    </div>
  );
};

export default ProjectMid;
