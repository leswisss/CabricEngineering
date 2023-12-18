"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { pathRightProps } from "@/types";

const PathRight = ({data}: {data: pathRightProps}) => {
  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.8
  })

  return (
    <div className="pc-1" >
      <div className="path__image" ref={ref}>
        <Image
          src={data.image}
          fill
          quality={100}
          alt="Our Goal"
          sizes="(max-width: 600px) 100%, 100%"
        />
      </div>
      <div className="path__content">
        <span className="pc-title">{data.name}</span>
        <span className="pc-text">
          {data.text}
        </span>
      </div>
    </div>
  );
};

export default PathRight;