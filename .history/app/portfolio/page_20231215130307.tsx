"use client";

import React, { useState } from "react";
import { PortHero, PortfolioGallery, Preloader } from "@/components";

const Portfolio = () => {
  const [onComplete1, setOnComplete1] = useState(false);
  const [onComplete2, setOnComplete2] = useState(false);

  return (
    <>
    {!onComplete2 && <Preloader onComplete1={onComplete1} setOnComplete1={setOnComplete1} onComplete2={onComplete2} setOnComplete2={setOnComplete2} isInitial={isFirstVisit}/>}
      <PortHero />
      <PortfolioGallery />
    </>
  );
};

export default Portfolio;
