"use client";

import React, {useEffect, useState, useRef} from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { portfolioGalleryProps } from "@/types";

const PortfolioImage = ({ data }: { data: portfolioGalleryProps }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const dataRef = useRef()

  return (
    <Link
      href="/"
      className="pig__wrapper"
      style={{ width: `${data.width}px`, height: `${data.height}px` }}
      ref={ref}
    >
      <div
        className="pig__container"
        style={{ height: `${data.height - 64}px` }}
      >
        <Image
          src={data.image}
          alt="Portfolio Image"
          quality={100}
          sizes="(max-width: 600px) 100%, 100%"
          style={{ height: inView ? "100%" : "0%" }}
        />
        <div className="view__project">
          <span>VIEW PROJECT</span>
        </div>
      </div>
      <div className="pig__data">
        <span style={{ left: inView ? 0 : "-100%" }}>{data.year}</span>
        <p style={{ left: inView ? 0 : "-100%" }}>{data.name}</p>
      </div>
    </Link>
  );
};

export default PortfolioImage;
