"use client";

import React from "react";
import { AwardContent } from "..";
import "../../styles/HomePage/HomeAwards.scss";


const HomeAwards = () => {
  return (
    <section className="home__awards">
      <div className="container awards__container">
        <div className="ha__top">
          <span>ACCOLADES</span>
          <span>AWARDS AND RECOGNITION</span>
        </div>
        <div className="ha__bottom">
          <AwardContent />
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;
