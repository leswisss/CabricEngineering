import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import styles from "../../styles/ReUsables/heroreusable.module.scss";

const HeroReusable = ({
  image,
  text,
  header,
}: {
  image: StaticImageData;
  text: string;
  header: string;
}) => {
  return (
    <div className={styles.hero__wrapper}>
      <div className={styles.hero__image}>
        <div className={styles.overflow}>
          <Image
            fill
            quality={100}
            src={image}
            alt={`CaBric Engineering - ${header}`}
            placeholder="blur"
            sizes="100vw"
          />
        </div>
      </div>
      <div className={styles.hero__content}>
        <div className={`container ${styles.hero__cont}`}>
          <h3 className={styles.hc__h3}>{header}</h3>
          <p className={styles.hc__p}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroReusable;
