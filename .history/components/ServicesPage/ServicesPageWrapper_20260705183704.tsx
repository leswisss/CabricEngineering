"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroReusable from "../ReUsables/HeroReusable";
import { useT } from "next-i18next/client";
import IMAGER from "../../public/images/052.jpg";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

const ServicesPageWrapper = () => {
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
      <HeroReusable image={IMAGER} text={t("abouttext")} header="Services" />
      <Services/>
      <Footer />
    </>
  );
};

export default ServicesPageWrapper;
