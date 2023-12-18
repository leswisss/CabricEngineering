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

  useEffect(() => {
    const initially = sessionStorage.getItem("isFirstVisit");
    console.log(initially)
    console.log()

    if (initially === null) {
      sessionStorage.setItem("isFirstVisit", "true");
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }

    // const handleBeforeUnload = () => {
    //   sessionStorage.removeItem("isFirstVisit");
    // };

    // window.addEventListener("beforeunload", handleBeforeUnload);

    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, []);

  return (
    <>
      <Preloader isInitial={isFirstVisit} />
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
