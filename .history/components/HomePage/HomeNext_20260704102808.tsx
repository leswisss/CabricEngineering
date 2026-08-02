"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import Image from "next/image";
import IMAGE from "../../public/images/05.jpg";
import styles from "../../styles/HomePage/homenext.module.scss";

const HomeNext = () =>
  // { blur }: { blur: string }
  {
    const { t, i18n } = useT();
    const currentLng = i18n.language;

    //Parallax
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,

      offset: ["start end", "end start"],
    });

    //Handle Resizing Y value
    const [transform, setTransform] = useState(-150);

    useEffect(() => {
      const handleResize = () => {
        if (typeof window !== "undefined" && window.innerWidth < 540) {
          setTransform(-35);
        } else if (typeof window !== "undefined" && window.innerWidth < 750) {
          setTransform(-50);
        } else {
          setTransform(-70);
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
      <div className={styles.hn__section}>
        <div className={`container ${styles.hn__container}`}>
          <div className={styles.hn__left}>
            <p className={styles.p__h3}>{t("home:engineer")}</p>
            <p className={styles.p__p}>{t("home:entext")}</p>
            <Button
              text={t("home:more")}
              backColor="black"
              hbackColor="var(--gold)"
              textColor="white"
              thColor="white"
              link={currentLng === "en" ? "/about" : "/fr/a-propos"}
            />
          </div>
          <div className={styles.hn__right} ref={container}>
            <motion.div className={styles.hn__inner} style={{ y }}>
              {/* <CldImage
              fill
              placeholder="blur"
              blurDataURL={blur}
              src="05_xpcycv.jpg"
              alt="CaBric Engineering"
              sizes="(max-width: 750px) 100vw, 60vw"
            /> */}
              <Image
                fill
                placeholder="blur"
                src={IMAGE}
                alt="CaBric Engineering"
                sizes="(max-width: 750px) 100vw, 60vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

export default HomeNext;
