"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Plus from "@/utils/Icons/Plus";
import { useT } from "next-i18next/client";
import RoundText from "../ReUsables/RoundText";
import IMAGE from "../../public/images/BON_13 - Photo.jpg"
import IMAGE2 from "../../public/images/033.jpg"
import IMAGE3 from "../../public/images/013.jpg"
import IMAGE4 from "../../public/images/BON_13 - Photo.jpg"
import IMAGE5 from "../../public/images/BON_13 - Photo.jpg"
import styles from "../../styles/HomePage/homeservices.module.scss";

const HomeServices = () =>
  //   {
  //   blur2,
  //   blur3,
  //   blur4,
  //   blur5,
  //   blur6,
  // }: {
  //   blur2: string;
  //   blur3: string;
  //   blur4: string;
  //   blur5: string;
  //   blur6: string;
  // }
  {
    const { t } = useT();

    const imageData = [
      {
        src: "BON_13_-_Photo_zws8x7.jpg",
        // blur: blur3,
        name: t("home:serone"),
        text: t("home:ser1"),
      },
      {
        src: "03_i14ttv.jpg",
        // blur: blur4,
        name: t("home:sertwo"),
        text: t("home:ser2"),
      },
      {
        src: "01_zuo3sw.jpg",
        // blur: blur5,
        name: t("home:serthree"),
        text: t("home:ser3"),
      },
      {
        src: "05_xpcycv.jpg",
        // blur: blur2,
        name: t("home:serfour"),
        text: t("home:ser4"),
      },
      {
        src: "02_y41zlb.jpg",
        // blur: blur6,
        name: t("home:serfive"),
        text: t("home:ser5"),
      },
    ];

    const [activeAccordion, setActiveAccordion] = useState(-1);

    return (
      <div className={styles.hs__section}>
        <div className={styles.hs__left}>
          <div className={styles.hs__wrap}>
            <div className={styles.hs__inner}></div>
          </div>
        </div>
        <div className={styles.hs__right}>
          <div className={styles.hsr__span}>
            <RoundText color="var(--gold)" text={t("home:service")} />
          </div>
          <div className={styles.acc__wrap}>
            {imageData.map((data, i) => (
              <div
                className={`${styles.accordion} ${
                  activeAccordion === i ? styles.active__acc : ""
                }`}
                onClick={() =>
                  setActiveAccordion(activeAccordion === i ? -1 : i)
                }
              >
                <div className={styles.acc__top}>
                  <span className={styles.side}>0{i + 1}</span>
                  <div className={styles.acc__nc}>
                    <span className={styles.acc__name}>{data.name}</span>
                    <div className={styles.acc__oc}>
                      <span className={`${styles.line} ${styles.toper}`}></span>
                      <span
                        className={`${styles.line} ${styles.toperr}`}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className={styles.acc__bottom}>
                  {/* <span className={styles.side}></span> */}
                  <div className={styles.para}>
                    <p>{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default HomeServices;
