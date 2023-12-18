"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import IMAGE from "../../public/images/project1.jpg";
import IMAGE2 from "../../public/images/project2.jpg";
import IMAGE3 from "../../public/images/project3.jpg";
import IMAGE4 from "../../public/images/project5.jpg";
import "../../styles/ProjectPage/ProjectHorizontal.scss";

const ProjectHorizontal = () => {
  const projects = [IMAGE, IMAGE2, IMAGE3, IMAGE4];
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {

      let containerWidth = containerRef.current?.offsetWidth || 0;
      let triggerWidth = triggerRef.current?.offsetWidth || 0;
      let amountToScroll = containerWidth - triggerWidth;

      const tween = gsap.to(containerRef.current, {
        x: -amountToScroll,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 15%",
        end: "+=" + amountToScroll,
        pin: true,
        animation: tween,
        scrub: 1,
        markers: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="projectr__horizontal">
        <div className="prhr__trigger" ref={triggerRef}>
          <div className="projectr__wrapper" ref={containerRef}>
            {projects.map((image, i) => (
              <div className="prhr__image-container" key={`prh-${i}`}>
                <div className="prhr__image">
                  <Image
                    src={image}
                    alt="Project Image"
                    fill
                    quality={100}
                    sizes="(max-width: 600px) 100%, 100%"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHorizontal;
