"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import IMAGE from "../../public/images/033.jpg"
import HeroReusable from "../ReUsables/HeroReusable";

const ProjectPageWrapper = () => {
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

  return <>
  <Navbar/>
  <HeroReusable image={} text={} header="Portfolio"/>
  <Footer/>
  </>;
};

export default ProjectPageWrapper;
