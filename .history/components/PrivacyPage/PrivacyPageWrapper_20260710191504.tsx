"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroReusable from "../ReUsables/HeroReusable";
import { useT } from "next-i18next/client";
import IMAGER from "../../public/images/040.jpg";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import PrivacySection from "./PrivacySection";

const PrivacyPageWrapper = () => {
  const { t } = useT();
  const [lenis, setLenis] = useState<Lenis | null>(null);

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
    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);

  return (
    <>
      <Navbar />
      <HeroReusable
        image={IMAGER}
        text={t("privacy:privacyone")}
        header={t("about:privacy")}
      />
      <PrivacySection />
      <Footer />
    </>
  );
};

export default PrivacyPageWrapper;
