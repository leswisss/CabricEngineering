"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import ProjectHero from "./ProjectHero";
import { IProject } from "@/utils/type";

const ProjectDetailWrapper = ({ project }: { project: IProject }) => {
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
      <ProjectHero project={project} />
      <ProjectMid/>
      <Footer />
    </>
  );
};

export default ProjectDetailWrapper;
