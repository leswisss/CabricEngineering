import React from 'react'
import Background from '@/utils/Icons/Background'
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import styles from "../../styles/Navigation/footer.module.scss"

const Footer = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <footer className={styles.footer}>
      <div className={styles.background}>
        <Background/>
      </div>
      <div className={`container ${styles.foot__container}`}>
        <div className={styles.footer__top}>
          <h3>{t("home:unique")}</h3>
          <p>{t("home:")}</p>
        </div>
        <div className={styles.footer__mid}>

        </div>
        <div className={styles.footer__bottom}>

        </div>
      </div>
    </footer>
  )
}

export default Footer