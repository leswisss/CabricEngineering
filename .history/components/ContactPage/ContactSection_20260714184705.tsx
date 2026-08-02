import React from "react";
import styles from "../../styles/ContactPage/contactsection.module.scss";
import RoundText from "../ReUsables/RoundText";
import { FormFieldsData } from "@/utils";
import { useT } from "next-i18next/client";

const ContactSection = () => {
  const { t } = useT();

  const firstTwo = FormFieldsData.slice(0, 1);
  
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
