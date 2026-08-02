"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HomeHero from "./HomeHero";
import Navbar from "../Navigation/Navbar";
import HomeNext from "./HomeNext";
import HomeServices from "./HomeServices";
import HomeProjects from "./HomeProjects";
import HomeTestimonials from "./HomeTestimonials";
import Footer from "../Navigation/Footer";
import { IProject } from "@/utils/type";
import ConstructionCalculator from "../ReUsables/ConstructionCalculator";

const HomePageWrapper = ({ projects }: { projects: IProject[] }) => {
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
      <HomeHero />
      {/* <HomeNext />
      <HomeServices />
      <HomeProjects projects={projects}/>
      <ConstructionCalculator /> */}
      <HomeTestimonials />
      {/* <Footer /> */}
    </>
  );
};

export default HomePageWrapper;
