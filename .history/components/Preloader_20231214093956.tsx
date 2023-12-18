"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "../styles/Preloader.scss";

const Preloader = () => {
  const cabric = "CABRIC";
  const array = cabric.split("");
  const slogan = "SUSTAINABLE & ECO-FRIENDLY CONSTRUCTION";
  const array2 = slogan.split(" ");
  const pathname = usePathname();

  return (
    <section className="preloader">
      <div className="preloader__text">
        <div className="home__active">
          <div className="preloader__overflow">
            <h3>
              {array.map((letter, i) => (
                <span key={`sy${i}`} className="array-1">{letter}</span>
              ))}
            </h3>
          </div>
          <div className="preloader__overflow">
            <p>
              {array2.map((word, i) => (
                <span key={`w${i}`} className="array-2">{word}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="preloader__overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </section>
  );
};

export default Preloader;
