"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import { useT } from "next-i18next/client";
import IMAGER from "../../public/images/033.jpg";
import IMAGE from "../../public/images/DONE_9 - Photo.jpg";
import IMAGE2 from "../../public/images/05.jpg";
import IMAGE3 from "../../public/images/03.jpg";
import IMAGE4 from "../../public/images/023.jpg";
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
