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

  const [isInitialVisit, setIsInitialVisit] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading2(false);
    }, 3000);

    const isInitial = localStorage.getItem("isInitialVisit");

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
      clearTimeout(timeout);
      window.removeEventListener("beforeunload", handleBeforeUnload)
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
