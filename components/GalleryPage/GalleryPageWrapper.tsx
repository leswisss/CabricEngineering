"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroReusable from "../ReUsables/HeroReusable";
import { useT } from "next-i18next/client";
import IMAGER from "../../public/images/023.jpg";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Gallery from "./Gallery";
import { Gallery as Galleria } from "@/utils/type";

const GalleryPageWrapper = ({ gallery }: { gallery: Galleria[] }) => {
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
      <HeroReusable image={IMAGER} text={t("galtext")} header={t("gallery")} />
      <Gallery gallery={gallery} />
      <Footer />
    </>
  );
};

export default GalleryPageWrapper;
