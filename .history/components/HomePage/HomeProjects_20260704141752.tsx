import React from "react";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import RoundText from "../ReUsables/RoundText";
import Image from "next/image";
import IMAGE from "../../public/images/DONE_9 - Photo.jpg"
import IMAGE2 from "../../public/images/05.jpg"
import IMAGE3 from "../../public/images/"
import IMAGE4 from "../../public/images/DONE_9 - Photo.jpg"
import styles from "../../styles/HomePage/homeprojects.module.scss";

const HomeProjects = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const projectDetails = [
    {
      name: "Highland Suite Tower",
      year: "2025",
      location: "Bamenda, Cameroon",
      type: "Private Individual",
      image:
    }
  ]

  return (
    <div className={styles.hp__section}>
      <div className={`container ${styles.hp__container}`}>
        <div className={styles.hp__top}>
          <div className={styles.round}>
            <RoundText color="var(--gold)" text={t("home:featured")} />
          </div>
          <div className={styles.hptop}>
            <p className={styles.hp__p}>{t("home:feaone")}</p>
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
        <div className={styles.hp__bottom}>

        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
