"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import WOMAN from "../../public/images/woman.jpg";
import { Icon } from "@iconify/react";
import "../../styles/ProjectPage/ProjectDetails.scss";

const ProjectDetails = () => {
  const detailData = [
    {
      data: "The Urban Oasis spans an area of 400 square meters and comprises residential apartments, office spaces, retail outlets and parking spots. The residential apartments offer a stunning city view and are equiped with modern amenities for comfortable living.",
    },
    {
      data: "The Urban Oasis spans an area of 400 square meters and comprises residential apartments, office spaces, retail outlets and parking spots. The residential apartments offer a stunning city view and are equiped with modern amenities for comfortable living.",
    },
  ];

  const ptagRef = useRef<HTMLParagraphElement>(null);
  const trigger1Ref = useRef<HTMLDivElement>(null);
  const trigger3Ref = useRef<HTMLDivElement>(null);
  const trigger2Refs = useRef<(HTMLDivElement | null)[]>([])
  const ptag2Refs = useRef<(HTMLParagraphElement | null)[]>([])
  const spanRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      animationOne();
      animationTwo();
      // animationThree()
    }, [ptagRef, ptag2Refs, spanRef]);

    return () => ctx.revert();
  }, []);

  const animationOne = () => {
    gsap.from(spanRef.current, {
      x: "-100%",

      scrollTrigger: {
        trigger: trigger1Ref.current,
        start: "top+=10px bottom",
        end: "top+=150px bottom",
        scrub: 1,
        markers: true,
      },
    });
  };

  const animationTwo = () => {
    trigger2Refs.current.forEach((el, i) => {
      gsap.from(ptag2Refs.current[i], {
        y: "100%",
        scrollTrigger: {
          trigger: el,
          start: "top+=20px bottom",
          end: "top+=200px bottom",
          scrub: 1,
          markers: true
        }
      });
    });
  };

  return (
    <section className="project__details">
      <div className="container pro-d__container">
        <div className="ninety">
          <div className="prod__top">
            <div className="prodt__overflow" ref={trigger1Ref}>
              <span ref={spanRef}>PROJECT DETAILS</span>
            </div>
            <div className="prodt__right">
              {detailData.map((data, i) => (
                <div
                  className="prodt__overflow"
                  key={`dd-${i}`}
                  ref={el => trigger2Refs.current[i] = el}
                >
                  <p ref={el => ptag2Refs.current[i] = el}>{data.data}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="prod__bottom">
            <div className="prodb__left">
              <div className="prodb__image">
                <Image
                  src={WOMAN}
                  alt="Testimonial"
                  quality={100}
                  fill
                  sizes="(max-width: 600px) 100%, 100%"
                />
              </div>
              <Icon icon="ri:double-quotes-l" />
            </div>
            <div className="prodb__right">
              <div className="prodb__overflow">
                <span>
                  The Urban Oasis spans an area of 400 square meters and
                  comprises residential apartments, office spaces, retail
                  outlets and parking spots.
                </span>
              </div>
              <div className="prodb__overflow">
                <p>
                  The Urban Oasis spans an area of 400 square meters and
                  comprises residential apartments, office spaces, retail
                  outlets and parking spots. The residential apartments offer a
                  stunning city view and are equiped with modern amenities for
                  comfortable living.
                </p>
              </div>
              <div className="prodb__overflow">
                <span className="testi__client">CHE SARAH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
