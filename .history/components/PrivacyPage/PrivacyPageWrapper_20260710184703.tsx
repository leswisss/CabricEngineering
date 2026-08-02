"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroReusable from "../ReUsables/HeroReusable";
import { useT } from "next-i18next/client";
import IMAGER from "../../public/images/02.jpg";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

const PrivacyPageWrapper = () => {
  const { t } = useT();

  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <HeroReusable image={IMAGER} text={t("about:privacy")} header="Contact" />
      <Footer />
    </>
  );
};

export default PrivacyPageWrapper;
