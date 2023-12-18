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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      // let containerWidth = containerRef.current?.offsetWidth || 0;
      // let triggerWidth = triggerRef.current?.offsetWidth || 0;
      // let amountToScroll = containerWidth - triggerWidth;

      function getScrollAmount() {
        let containerWidth = containerRef.current?.offsetWidth || 0;
        let triggerWidth = triggerRef.current?.offsetWidth || 0;
        return -(containerWidth - triggerWidth)
      }
  
      const tween = gsap.to(containerRef.current, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });
  
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 15%",
        end: "+=" + ,
        pin: true,
        animation: tween,
        scrub: 1,
      });
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <section className="project__horizontal">
      <div className="prh__trigger" ref={triggerRef}>
        <div className="project__wrapper" ref={containerRef}>
          {projects.map((image, i) => (
            <div className="prh__image-container" key={`prh-${i}`}>
              <div className="prh__image">
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
  );
};

export default ProjectHorizontal;
