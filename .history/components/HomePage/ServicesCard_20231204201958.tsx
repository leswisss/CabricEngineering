"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { serviceCardProps } from "@/types";
import "../../styles/HomePage/ServicesCard.scss";

const ServicesCard = ({ data, i }: { data: serviceCardProps, i:number }) => {
  const [activeBack, setActiveBack] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const getwindowWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width)
    }

    getwindowWidth()
    window.addEventListener("resize", getwindowWidth)

    return () => {
      window.removeEventListener("resize", getwindowWidth)
    }
  }, [])

  return (
    <div className="services__card-wrapper" ref={ref}>
      <div className="services__card-cover" style={{height: inView ? "100%" : "0%", transitionDelay: `${i*0.5}s`}}>
        <div
          className="services__card"
          onMouseEnter={() => setActiveBack(true)}
          onMouseLeave={() => setActiveBack(false)}
        >
          <div className="service__img" style={{ opacity: activeBack ? 1 : 0 }}>
            <Image
              src={data.image}
              alt={data.title}
              fill
              sizes="(max-width: 600px) 100%, 100%"
              quality={100}
            />
          </div>
          <div className="service__content">
            <div className="con-top">
              <span className="top-subtitle">{data.subtitle}</span>
              <span className="top-title">{data.title}</span>
            </div>
            <div className="con-bottom" onClick={() => setActiveModal(true)}>
              <span className="arrow-span">
                <Icon icon="iconoir:arrow-tr" />
              </span>
              <span>DETAILS</span>
            </div>
          </div>
          <div
            className={`services__modal ${activeModal ? "active-modal" : ""}`}
          >
            <div className="services__m-content">
              <div className="sc-header">
                <div className="sch-left">
                  <span className="top-subtitle">{data.subtitle}</span>
                  <span className="top-title">{data.title}</span>
                </div>
                <div
                  className="sch-right"
                  onClick={() => setActiveModal(false)}
                >
                  <Icon icon="ic:twotone-close" />
                </div>
              </div>
              <div className="sc-content">
                <p>
                  Quality over quantity, so the saying goes. With so many
                  concepts floating around the architectural profession, it can
                  be difficult to keep up with all the ideas which you're
                  expected to know. But in architecture and elsewhere, the most
                  memorable ideas are often the ones that can be condensed
                  textually: “form follows function,” “less is more,” “less is a
                  bore.” Though slightly longer than three words, the following
                  lists a selection of texts that don’t take too long to read,
                  but impart long-lasting lessons, offering you the opportunity
                  to fill gaps in your knowledge quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
