import React from "react";
import styles from "../../styles/ContactPage/contactsection.module.scss";
import RoundText from "../ReUsables/RoundText";
import Fli from "gsap-trial/Flip";
import { useT } from "next-i18next/client";

const ContactSection = () => {
  const { t } = useT();

  const firstThree = FormFields.slice(0, 2);
  return (
    <div className={styles.con__section}>
      <div className={`container ${styles.con__container}`}>
        <div className={styles.con__left}>
          <RoundText color="var(--gold)" text={t("send")} />
        </div>
        <div className={styles.con__right}>
          <form action="">

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
