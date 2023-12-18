"use client";


import React, { useLayoutEffect, useState } from "react";
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
  const [isInitialVisit, setIsInitialVisit] = useState(true);

  useLayoutEffect(() => {
    const initial = localStorage.getItem("isInitialVisit");

    if (isInitial === null) {
      localStorage.setItem("isInitialVisit", "true");
    } else {
      setIsInitialVisit(false);
    }

    const handleBeforeUnload = () => {
      localStorage.removeItem("isInitialVisit")
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    };
  }, []);

  return (
    <>
      <Preloader isInitial={isInitialVisit}/>
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
