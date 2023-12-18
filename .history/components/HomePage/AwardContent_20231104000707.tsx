"use client";

import React from "react";
import AwardsSlide from "./AwardsSlide";
import { AwardsData } from "@/utils";
import "../../styles/HomePage/AwardContent.scss"

const AwardContent = () => {
  return (
    <div>
      {AwardsData.map((data, i) => (
        <AwardsSlide key={`ad-${i}`} data={data} />
      ))}
    </div>
  );
};

export default AwardContent;
