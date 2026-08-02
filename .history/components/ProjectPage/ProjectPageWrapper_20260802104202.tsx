"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import { useT } from "next-i18next/client";
import IMAGER from "../../public/images/033.jpg";
import HeroReusable from "../ReUsables/HeroReusable";
import { IProject } from "@/utils/type";
import ProjectsWrapper from "./ProjectsWrapper";

const ProjectPageWrapper = ({ projects }: { projects: IProject[]}) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

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
      <HeroReusable image={IMAGER} text={t("projects")} header="Portfolio" />
      <ProjectsWrapper projects={projects} />
      <Footer />
    </>
  );
};

export default ProjectPageWrapper;
