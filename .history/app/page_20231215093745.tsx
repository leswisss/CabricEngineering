"use client";

import React, { useEffect, useState } from "react";
import {
  HomeHero,
  AboutHome,
  PathofProgress,
  HomeServices,
  HomePortfolio,
  HomeTeam,
  HomeAwards,
  Testimonials,
  Preloader,
} from "@/components";

const HomePage = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isC]

  useEffect(() => {
    const initially = localStorage.getItem("isFirstVisit");

    if (initially === null) {
      setTimeout(() => {
        localStorage.setItem("isFirstVisit", "true");
        setIsFirstVisit(true);
      }, 0);
    } else {
      setIsFirstVisit(false);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("isFirstVisit");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <Preloader />
      <div className="main">
        <HomeHero />
        <AboutHome />
        <PathofProgress />
        <HomeServices />
        <HomePortfolio />
        <HomeTeam />
        {/* <HomeAwards/> */}
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
