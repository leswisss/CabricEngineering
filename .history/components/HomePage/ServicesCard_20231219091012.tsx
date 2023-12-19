"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { serviceCardProps } from "@/types";
import "../../styles/HomePage/ServicesCard.scss";

const ServicesCard = ({ data, i }: { data: serviceCardProps; i: number }) => {
  const [activeBack, setActiveBack] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const getwindowWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    getwindowWidth();
    window.addEventListener("resize", getwindowWidth);

    return () => {
      window.removeEventListener("resize", getwindowWidth);
    };
  }, []);

  return (
    <div className="services__card-wrapper" ref={ref}>
      <div
        className="services__card-cover"
        style={{
          height: inView ? "100%" : "0%",
          transitionDelay: windowWidth > 1000 ? `${i * 0.4}s` : "0s",
        }}
      >
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
          <div
            className="service__content"
            style={{ color: activeBack ? "#FBF0E2" : "#035336" }}
          >
            <div className="con-top">
              <span className="top-subtitle">{data.subtitle}</span>
              <span className="top-title">{data.title}</span>
            </div>
            <div className="con-bottom" onClick={() => setActiveModal(true)}>
              <span
                className="arrow-span"
                style={{
                  border: activeBack
                    ? "1px solid #FBF0E2"
                    : "1px solid #035336",
                }}
              >
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
                  {data.text}
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
