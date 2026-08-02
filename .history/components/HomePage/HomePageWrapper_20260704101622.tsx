"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HomeHero from "./HomeHero";
import Navbar from "../Navigation/Navbar";
import HomeNext from "./HomeNext";
import HomeServices from "./HomeServices";

// const HomePageWrapper = ({
//   blur,
//   blur2,
//   blur3,
//   blur4,
//   blur5,
//   blur6,
// }: {
//   blur: string;
//   blur2: string;
//   blur3: string;
//   blur4: string;
//   blur5: string;
//   blur6: string;
// }) => {
const HomePageWrapper = ({}: {}) => {
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
      <HomeHero blur={blur} />
      <HomeNext 
      blur={blur2} />
      <HomeServices
        // blur2={blur2}
        // blur3={blur3}
        // blur4={blur4}
        // blur5={blur5}
        // blur6={blur6}
      />
    </>
  );
};

export default HomePageWrapper;
