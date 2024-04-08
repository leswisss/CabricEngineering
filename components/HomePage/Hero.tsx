"use client";

import React, { useEffect } from "react";
import "../../styles/HomePage/Hero.scss";
import { InfiniteMarquee, HomeImage } from "..";

const HomeHero = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <section className="home">
      <div className="home__container">
        <div className="container">
          <h3>
            Global Architectural Agency Building A Sustainable Future
            <br />
            Through Innovative  and Eco-friendly Construction Solutions.
          </h3>
          <span className="spannerr">
            Global Architectural Agency Building A Sustainable Future Through Innovative and Eco-friendly Construction Solutions.
          </span>
        </div>
        <InfiniteMarquee />
        <HomeImage />
      </div>
    </section>
  );
};

export default HomeHero;
