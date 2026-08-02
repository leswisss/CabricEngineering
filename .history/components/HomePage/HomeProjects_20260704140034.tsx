import React from "react";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import RoundText from "../ReUsables/RoundText";
import styles from "../../styles/HomePage/homeprojects.module.scss";

const HomeProjects = () => {
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
            <p>{t("home:feaone")}</p>
            <Button
              text={t("home:feacta")}
              backColor="black"
              hbackColor="white"
              textColor="white"
              thColor="black"
              link={currentLng === "en" ? "/por" : "/fr/contact"}
            />
          </div>
        </div>
        <div className={styles.hp__bottom}></div>
      </div>
    </div>
  );
};

export default HomeProjects;
