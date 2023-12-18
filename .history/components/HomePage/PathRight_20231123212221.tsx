"use client";

import React, {useEffect, useState, useRef} from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { pathRightProps } from "@/types";

const PathRight = ({data}: {data: pathRightProps}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  const {ref, inView} = useInView({
    triggerOnce: false,
    threshold: 0.8
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    handleResize();

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="pc-1" >
      <div className="path__image" ref={ref}>
        <Image
          src={data.image}
          fill
          quality={100}
          alt="Our Goal"
          sizes="(max-width: 600px) 100%, 100%"
          style={{height: inView ? "100%" : 0, transition: "height 0.6s cubic-bezier(0.87, 0, 0.13, 1)", transitionDelay: windowWidth > 906 ? data.delay : "0"}}
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
