"use client";

import React from "react";
import { pathRightData } from "@/utils";
import { useInView } from "react-intersection-observer"
import "../../styles/HomePage/PathofProgress.scss";
import Link from "next/link";
import { PathRight, PathLeft } from "..";

const PathofProgress = () => {
  const {ref, inView} = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  return (
    <section className="pathof__progress" ref={ref}>
      <div className="container path__container">
        <div className="path__titles">
          <span className="subtitle" style={{top: inView ? "0" : "90px"}}>ABOUT</span>
          <span className="title" style={{top: inView ? "0" : "120px"}}>OUR PATH OF PROGRESS</span>
        </div>

        <div className="path__contents">
          <div className="left__section">
            <PathLeft/>
          </div>
          <div className="right__section">
            {
              pathRightData.map((data, i) => (
                <PathRight key={`pathr-${i}`} data={data}/>
              ))
            }
          
          </div>
        </div>

        <Link href="/" className="path__cta">
          <span>LEARN MORE</span>
        </Link>
      </div>
    </section>
  );
};

export default PathofProgress;