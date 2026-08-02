import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/013.jpg";
import styles from "../../styles/AboutPage/sercontact.module.scss";

const SerContact = () => {
  return (
    <div className={styles.ser__section}>
      <div className={styles.ser__image}>
        <div className={styles.seri}>
          <Image fill quality={100} src={IMAGE} alt=""/>
        </div>
        <div className={styles.ser__blur}></div>
      </div>
      <div className={`container ${styles.ser__container}`}>

      </div>
    </div>
  );
};

export default SerContact;
