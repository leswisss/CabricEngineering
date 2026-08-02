"use client";

import React, { useRef } from "react";
import RoundText from "../ReUsables/RoundText";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useT } from "next-i18next/client";
import { swiperSettings } from "@/utils";
import Button from "../ReUsables/Button";
import Arrow from "@/utils/Icons/Arrow";
import styles from "../../styles/HomePage/testimonials.module.scss";

// Import Swiper styles
import "swiper/css";

const HomeTestimonials = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;
  const swiperRef = useRef<SwiperType | null>(null);

  const testimonials = [
    {
      text: t("home:testione"),
      name: "Jean-Paul",
      position: t("home:diaspo"),
      link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
    },
    {
      text: t("home:testione"),
      name: "Jean-Paul",
      position: t("home:diaspo"),
      link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
    },
    {
      text: t("home:testione"),
      name: "Jean-Paul",
      position: t("home:diaspo"),
      link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
    },
    {
      text: t("home:testione"),
      name: "Jean-Paul",
      position: t("home:diaspo"),
      link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
    },
    {
      text: t("home:testione"),
      name: "Jean-Paul",
      position: t("home:diaspo"),
      link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
    },
    {
      text: t("home:testione"),
      name: "Jean-Paul",
      position: t("home:diaspo"),
      link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
    },
    {
      text: t("home:testione"),
      name: "Jean-Paul",
      position: t("home:diaspo"),
      link: currentLng === "en" ? "/portfolio" : "/fr/portfolio",
    },
  ];

  const SwiperButtons = () => {
    return (
      <div className={styles.button__wrapper}>
        <div
          className={styles.button}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Arrow />
        </div>
        <div
          className={styles.button2}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Arrow />
        </div>
      </div>
    );
  };

  return (
    <div className={`section ${styles.testi__section}`}>
      <div className={`container ${styles.testi__container}`}>
        <div className={styles.testi__top}>
          <RoundText color="var(--gold)" text={t("home:what")} />
          <p className={styles.testi__p}>{t("home:testi")}</p>
        </div>
        <div className={styles.testi__bottom}>
          <Swiper
            className={styles.slider}
            {...swiperSettings}
            speed={800}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((data, i) => (
              <SwiperSlide key={i} className={styles.testi__wrapper}>
                <div className={styles.testi__box}>
                  <p className={styles.testi__p2}>"{data.text}"</p>
                  <div className={styles.testi__bottomer}>
                    <div className={styles.tb__left}>
                      <span className={styles.tb__span}>{data.name}</span>
                      <span className={styles.tb__span2}>{data.position}</span>
                    </div>
                    <div className={styles.testi__button}>
                      <Button
                        text={t("home:view")}
                        backColor="black"
                        hbackColor="var(--gold)"
                        textColor="white"
                        thColor="white"
                        link={data.link}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.bur}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
