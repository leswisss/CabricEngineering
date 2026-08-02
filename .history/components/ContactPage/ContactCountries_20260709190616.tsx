"use client";

import React from "react";
import RoundText from "../ReUsables/RoundText";
import Cameroon from "@/utils/Icons/Cameroon";
import France from "@/utils/Icons/France";
import { useT } from "next-i18next/client";
import styles from "../../styles/ContactPage/contactcountries.module.scss";

const ContactCountries = () => {
  const { t } = useT();

  const contactDetails = [
    {
      country: t("about:cameroon"),
      svg: Cameroon,
      name: "Guiko Hotel, Montée Chapelle Obili",
      name2: `Yaounde, ${t("about:cameroon")}`,
      person: "Mr. Christopher Arrey Tarh-Ebai",
      link: {
        name: "christopher@cabricengineering.com",
        linker: "mailto:christopher@cabricengineering.com",
      },
      phone: {
        name: "+237 683 40 93 12",
        linker: "tel:+237683409312",
      },
    },
    {
      country: "France",
      svg: France,
      name: "74 Faubourg Saint Honoré",
      name2: `Paris, France`,
      person: "Mr. Brice Forghab",
      link: {
        name: "brice@cabricengineering.com",
        linker: "mailto:brice@cabricengineering.com",
      },
      phone: {
        name: "+237 680 25 90 72",
        linker: "tel:+237680259072",
      },
    },
  ];

  return (
    <div className={styles.cc__section}>
      <div className={`container ${styles.cc__container}`}>
        <div className={styles.cc__top}>
          <div className={styles.cc__left}>
            <RoundText text={t("about:contact")} color="var(--gold)" />
          </div>
          <div className={styles.cc__right}>
            <p>{t("about:contacter")}</p>
          </div>
        </div>
        <div className={styles.cc__bottom}>
          {
            contactDetails.map((data, i) => (
              <div key={i} className={styles.ccb__wrap}>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ContactCountries;
