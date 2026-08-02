import React from "react";
import RoundText from "../ReUsables/RoundText";
import { useT } from "next-i18next/client";
import Image from "next/image";
import IMAGE from "../../public/images/BON_13 - Photo.jpg";
import IMAGE2 from "../../public/images/033.jpg";
import IMAGE3 from "../../public/images/013.jpg";
import IMAGE4 from "../../public/images/05.jpg";
import IMAGE5 from "../../public/images/02.jpg";
import styles from "../../styles/AboutPage/services.module.scss";

const Services = () => {
  const { t } = useT();

  const imageData = [
    {
      src: IMAGE,
      name: t("home:serone"),
      text: t("home:ser1"),
    },
    {
      src: IMAGE2,
      name: t("home:sertwo"),
      text: t("home:ser2"),
    },
    {
      src: IMAGE3,
      name: t("home:serthree"),
      text: t("home:ser3"),
    },
    {
      src: IMAGE4,
      name: t("home:serfour"),
      text: t("home:ser4"),
    },
    {
      src: IMAGE5,
      name: t("home:serfive"),
      text: t("home:ser5"),
    },
  ];
  return (
    <div className={styles.ser__section}>
      <div className={`container ${styles.ser__container}`}>
        <div className={styles.ser__left}>
          <RoundText text={t("services:ser")} color="var(--gold)" />
        </div>
        <div className={styles.ser__right}>{t("services:ser2")}</div>
      </div>
      <div className={styles.ser__services}>
        {imageData.map((data, i) => (
          <div className={styles.ser__wrap} key={i}>
            <span>(0{i + 1})</span>
            <div className={styles.ser__righter}>
              <h3 className={styles.ser__h3}>{data.name}</h3>
              <div className={styles.ser__image}>
                <Image
                  fill
                  quality={100}
                  alt={`CaBric Engineering - ${data.name}`}
                  src={data.src}
                  placeholder="blur"
                />
              </div>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
