"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { preloaderProps } from "@/types";
import { usePathname } from "next/navigation";
import { preloaderData } from "@/utils";
import "../styles/Preloader.scss";

const Preloader = ({
  isInitial,
  setOnComplete1,
  setOnComplete2,
  onComplete1,
  onComplete2,
}: preloaderProps) => {
  const slogan = "SUSTAINABLE & ECO-FRIENDLY CONSTRUCTION";
  const array2 = slogan.split(" ");
  const pathname = usePathname();
  const svgRef = useRef(null);
  const refs = useRef<HTMLSpanElement[]>([]);
  const barRefs = useRef<HTMLDivElement[]>([]);
  const barNumbers = Array.from({ length: 10 }, (_, i) => i + 1);

  useLayoutEffect(() => {
    if (isInitial && ) {
      gsap.to(svgRef.current, {
        height: "140px",
      });

      gsap.to(refs.current, {
        y: "0",
        stagger: 0.1,
        duration: 0.7,
        delay: 1,
        onComplete: () => setOnComplete1 && setOnComplete1(true),
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (onComplete1) {
      gsap.to(barRefs.current, {
        height: "0px",
        stagger: 0.1,
        duration: 0.5,
        delay: 1,
        onComplete: () => setOnComplete2(true),
      });

      gsap.to(svgRef.current, {
        height: "0px",
        delay: 1,
      });

      gsap.to(refs.current, {
        y: "-200%",
        stagger: 0.1,
        duration: 0.7,
        delay: 1,
      });
    }
  }, [onComplete1]);

  return (
    <section className="preloader">
      <div className="preloader__text">
        <div
          className="home__active"
          style={{
            display: pathname === "/" && isInitial ? "grid" : "none",
          }}
        >
          <div className="preloader__overflow">
            <div className="svg__overflow" ref={svgRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="137"
                viewBox="0 0 140 137"
                fill="none"
              >
                <g clip-path="url(#clip0_68_9)">
                  <path
                    d="M134.974 54.691C132.893 44.4708 128.502 34.862 122.136 26.6C115.83 18.4054 107.742 11.7536 98.4836 7.14835C89.2256 2.54313 79.0409 0.105337 68.7011 0.0196727C58.3614 -0.0659918 48.1377 2.20272 38.8047 6.65392C29.4717 11.1051 21.2741 17.6221 14.8331 25.711L14.1331 26.565C4.94478 38.4787 -0.0264332 53.1067 0.000105709 68.152C0.00182218 72.0393 0.331997 75.9194 0.987106 79.751L1.30211 81.578C3.14921 90.9252 6.96736 99.7714 12.5021 107.527L13.1671 108.451C19.4948 117.084 27.7673 124.104 37.3142 128.943C46.8611 133.782 57.4138 136.304 68.1171 136.304C78.8204 136.304 89.3731 133.782 98.92 128.943C108.467 124.104 116.739 117.084 123.067 108.451L123.767 107.527C129.319 99.7114 133.138 90.7999 134.967 81.389C135.072 80.843 135.17 80.304 135.268 79.758C136.698 71.4551 136.584 62.9596 134.932 54.698L134.974 54.691ZM15.6381 104.3C10.9517 97.5434 7.63638 89.933 5.88011 81.9C15.1901 82.866 24.5981 83.615 33.9291 84.126C34.9026 92.5318 36.8742 100.792 39.8021 108.731C31.6699 107.714 23.6021 106.235 15.6381 104.3ZM19.8801 109.781C27.0411 111.328 34.3491 112.525 41.7061 113.358L41.7761 113.519C45.0451 120.659 49.0211 126.294 53.4241 130.172C40.3785 127.067 28.642 119.933 19.8801 109.781ZM65.9541 131.74C58.8491 130.648 52.0731 124.313 46.8441 113.897C53.1441 114.478 59.5631 114.8 65.9541 114.863V131.74ZM65.9541 110.46C58.8421 110.39 51.7231 109.991 44.7371 109.263C41.5526 101.266 39.4207 92.8893 38.3951 84.343C47.4601 84.791 56.7001 85.043 65.9541 85.043V110.46ZM68.1101 79.331V18.13L61.3341 23.1V79.331H59.3601V31.5L54.6001 28.063V79.331H54.2361H53.3821C52.7521 79.331 52.1291 79.331 51.4921 79.275H50.9041H49.8541C49.3361 79.275 48.8111 79.275 48.3001 79.212H47.9781C47.8521 79.212 47.7121 79.212 47.5861 79.212L46.3541 79.1L45.1151 79.058L44.2821 79.009H43.8831V42.497L39.4451 39.256V78.757H39.3051H38.8501H38.6891C38.3461 78.757 37.9891 78.715 37.6461 78.694H37.1701L35.7701 78.617C35.6721 78.617 35.5671 78.617 35.4761 78.617L34.3071 78.547C33.6071 78.505 32.9071 78.47 32.2071 78.421L30.2891 78.295V43.659L37.8421 38.122L39.3821 36.995L40.8451 38.059L43.8201 40.236V33.733L53.0601 26.95L54.6001 25.851H54.6421L56.1121 26.929L59.3391 29.295V22.295L61.3131 20.839L66.5771 16.989L68.0891 15.876L69.6291 17.01L76.9021 22.351V29.295L80.1011 26.95L81.6061 25.851L83.1111 26.95L92.4001 33.733V40.257L95.3471 38.101L96.8381 37.016L98.3851 38.143L105.931 43.68V78.232L104.013 78.358L101.948 78.484L100.779 78.554C100.688 78.554 100.583 78.554 100.485 78.554L99.0851 78.631H98.6091C98.2591 78.631 97.9091 78.631 97.5591 78.694H97.3911H96.9431H96.8171V39.256L92.4001 42.497V78.967H91.9801L91.1681 79.016C90.7481 79.016 90.3351 79.016 89.9151 79.058L88.6621 79.107H88.3681H87.9621L86.3871 79.17H85.3441H84.7631L82.8731 79.233H82.0191C81.9002 79.24 81.781 79.24 81.6621 79.233V28.063L76.9441 31.5V79.303L68.1101 79.331ZM97.9021 84.343C96.8866 92.8868 94.7689 101.263 91.6021 109.263C84.6021 109.963 77.4901 110.39 70.3711 110.46V85.064C79.5901 85.036 88.8441 84.791 97.9021 84.343ZM70.3501 131.74V114.863C76.7341 114.8 83.1461 114.478 89.4601 113.897C84.2241 124.313 77.4551 130.648 70.3501 131.74ZM82.8521 130.2C87.2621 126.322 91.2521 120.687 94.5071 113.547L94.5771 113.386C101.913 112.561 109.202 111.367 116.417 109.809C107.652 119.967 95.9066 127.102 82.8521 130.2ZM120.764 104.188L120.666 104.328C112.701 106.254 104.634 107.726 96.5021 108.738C99.4267 100.798 101.398 92.5382 102.375 84.133C111.706 83.622 121.114 82.873 130.41 81.914C128.68 89.8887 125.403 97.4467 120.764 104.16V104.188Z"
                    fill="#FBF0E2"
                  />
                  <path
                    d="M135.009 81.389L135.289 79.758C135.212 80.304 135.1 80.843 135.009 81.389Z"
                    fill="#FBF0E2"
                  />
                  <path
                    d="M130.613 9.32399H127.925V16.968H126.735V9.32399H124.026V8.23199H130.613V9.32399Z"
                    fill="#FBF0E2"
                  />
                  <path
                    d="M140 8.23899V16.968H138.845V14.168C138.845 13.055 138.845 11.928 138.936 10.787L136.374 16.744H135.268L132.748 10.836C132.825 11.844 132.867 12.936 132.874 14.168V16.968H131.712V8.23199H132.832L135.842 15.4L138.88 8.24599L140 8.23899Z"
                    fill="#FBF0E2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_68_9">
                    <rect width="140" height="136.304" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="preloader__overflow">
            <p>
              {array2.map((word, i) => (
                <span
                  key={`w${i}`}
                  className="array-2"
                  ref={(el) => el && refs.current.push(el)}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="preloader-content">
          {preloaderData.map((data, i) => {
            const shouldDisplay =
              data.path === "/portfolio/"
                ? pathname.includes(data.path)
                : data.path === "/"
                ? pathname === data.path && !isInitial
                : pathname === data.path;
            return (
              <h2
                key={`pc-${i}`}
                style={{ display: shouldDisplay ? "block" : "none" }}
              >
                {data.name}
              </h2>
            );
          })}
        </div>
      </div>
      <div className="preloader__overlay">
        {barNumbers.map((bar, i) => (
          <div
            className="bar"
            key={i}
            ref={(el) => el && barRefs.current.push(el)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Preloader;
