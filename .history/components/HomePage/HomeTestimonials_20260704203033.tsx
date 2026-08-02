import React from 'react'
import RoundText from '../ReUsables/RoundText'
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/testimonials.module.scss"

const HomeTestimonials = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={`section ${styles.testi__section}`}>
      <div className={`container ${styles.testi__container}`}>
        <div className={styles.testi__top}>
          <RoundText color='var(--gold)' text={t("home:what")}/>
          <p>{t("home:")}</p>
        </div>
        <div className={styles.testi__bottom}>

        </div>
      </div>
    </div>
  )
}

export default HomeTestimonials