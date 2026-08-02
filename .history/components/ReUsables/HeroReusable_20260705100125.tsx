"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { StaticImageData } from "next/image";
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
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-150);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-50);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-75);
      } else {
        setTransform(-100);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  return (
    <div className={styles.hero__wrapper}>
      <div className={styles.hero__image} ref={container}>
        <motion.div className={styles.overflow} style={{y}}>
          <Image
            fill
            quality={100}
            src={image}
            alt={`CaBric Engineering - ${header}`}
            placeholder="blur"
            sizes="100vw"
          />
        </motion.div>
        <div className={styles.backk}></div>
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
