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
        <Image
          fill
          quality={100}
          src={image}
          alt={`CaBric Engineering - ${header}`}
          placeholder="blur"
          sizes="100vw"
        />
      </div>
      <div className={styles.hero__}>

      </div>
    </div>
  );
};

export default HeroReusable;
