"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import IMAGE from "../../public/images/path1.jpg";

const PathLeft = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });
  return (
    <>
      <div className="path__image" ref={ref}>
        <Image
          src={IMAGE}
          fill
          quality={100}
          alt="Our Goal"
          sizes="(max-width: 600px) 100%, 100%"
          style={{
            height: inView ? "100%" : 0,
            transition: "height 0.6s cubic-bezier(0.87, 0, 0.13, 1)",
          }}
        />
      </div>
      <div className="path__content">
        <span className="pc-title">OUR GOAL</span>
        <span className="pc-text">
          Our foremost goal is to revolutionize the world of architecture and
          construction by embracing a holistic approach that marries
          sustainability, innovation, aesthetics and resilience.
        </span>
      </div>
    </>
  );
};

export default PathLeft;
