"use client";

import React from "react";
import { preloaderProps } from "@/types";
import {
  preSvgAnim,
  preTextAnim,
  preBarAnim,
  preText2Anim,
} from "@/animations";
import Image from "next/image";
import LOGO from "../public/SVG/logotmwhite.svg"
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { preloaderData } from "@/utils";
import "../styles/Preloader.scss";

const Preloader = ({
  onComplete1,
  setOnComplete1,
  onComplete2,
  setOnComplete2,
  isInitial,
}: preloaderProps) => {
  const slogan = "SUSTAINABLE & ECO-FRIENDLY CONSTRUCTION";
  const array2 = slogan.split(" ");
  const pathname = usePathname();
  const barNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <section className="preloader">
      <div className="preloader__text">
        {pathname === "/" && isInitial && (
          <div className="home__active">
            <div className="preloader__overflow">
              <motion.div
                variants={preSvgAnim}
                initial="initial"
                animate={!onComplete1 ? "entry" : "initial"}
                className="svg__overflow"
              >
                <div className="logo__overrr">
                  <Image src={LOGO} fill quality={100} alt="Cabric Logo" />
                </div>
              </motion.div>
            </div>
            <div className="preloader__overflow">
              <p>
                {array2.map((word, i) => (
                  <motion.span
                    custom={i}
                    variants={preTextAnim}
                    initial="initial"
                    animate={!onComplete1 ? "entry" : "exit"}
                    key={`w${i}`}
                    className="array-2"
                    onAnimationComplete={(animation) => {
                      if (animation === "entry") {
                        setTimeout(() => {
                          setOnComplete1(true); 
                        }, 1500);
                      }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>
          </div>
        )}
        <div className="preloader-content">
          {preloaderData.map((data, i) => {
            const shouldDisplay =
              data.path === "/portfolio/"
                ? pathname.includes(data.path)
                : data.path === "/"
                ? pathname === data.path && !isInitial
                : pathname === data.path;
            return (
              <div className="preloader-overflow">
                <motion.h2
                  key={`pc-${i}`}
                  style={{ display: shouldDisplay ? "block" : "none" }}
                  variants={preText2Anim}
                  initial="initial"
                  animate={!onComplete1 ? "entry" : "exit"}
                  onAnimationComplete={(animation) => {
                    if (animation === "entry" && !isInitial) {
                      setTimeout(() => {
                        setOnComplete1(true) 
                      }, 1000);
                    }
                  }}
                >
                  {data.name}
                </motion.h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="preloader__overlay">
        {barNumbers.map((bar, i) => (
          <motion.div
            className="bar"
            key={i}
            custom={i}
            variants={preBarAnim}
            initial="initial"
            animate={onComplete1 ? "entry" : "initial"}
            onAnimationComplete={(animation) => {
              if (animation === "entry") {
                setTimeout(() => {
                  setOnComplete2(true); 
                }, 700);
              }
            }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

export default Preloader;
