import React from "react";
import RoundText from "../ReUsables/RoundText";
import { useT } from "next-i18next/client";
import Image from "next/image";
import IMAGE from "../../public/images/Tarh Ebai - CaBric Engineering.jpg";
import IMAGE2 from "../../public/images/Brice Forghab - CaBric Engineering.jpg";
import styles from "../../styles/AboutPage/leadership.module.scss";

const Leadership = () => {
  const { t } = useT();

  const leadContent = [
    {
      name: "Christopher Arrey Tarh-Ebai",
      linkedIn:
        "https://www.linkedin.com/in/christopher-arrey-tarh-ebai-90492121b",
      text: t("about:chris"),
      image: IMAGE,
    },
    {
      name: "Brice Forghab",
      linkedIn: "https://www.linkedin.com/in/briceforghab25",
      text: t("about:brice"),
      image: IMAGE2
    },
  ];
  return (
    <div className={`section ${styles.lead__section}`}>
      <div className={`container ${styles.lead__container}`}>
        <div className={styles.lead__left}>
          <RoundText text={t("about:lead")} color="var(--gold)" />
        </div>
        <div className={styles.lead__right}>
          {leadContent.map((data, i) => (
            <div className={styles.lead__wrap} key={i}>
              <div className={styles.image__wrap}>
                <Image fill quality={100} alt={`${data.name} - CaBric `}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
