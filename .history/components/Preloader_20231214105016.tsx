"use client";

import React, {useRef, useState, useLayoutEffect} from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import "../styles/Preloader.scss";

const Preloader = () => {
  const slogan = "SUSTAINABLE & ECO-FRIENDLY CONSTRUCTION";
  const array2 = slogan.split(" ");
  const pathname = usePathname();
  const svgRef = useRef(null)
  const refs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    const createAnimations = () => {
      gsap.to(refs.current, {
        opacity: 1,
        ease: "none",
        stagger: 0.1,
      });
    };
  }, [])

  return (
    <section className="preloader">
      <div className="preloader__text">
        <div className="home__active">
          <div className="preloader__overflow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              ref={svgRef}
            >
              <g clip-path="url(#clip0_64_2)">
                <path
                  d="M79.2195 32.0995C77.9982 26.101 75.4208 20.4614 71.6845 15.6123C67.9833 10.8027 63.236 6.89853 57.8023 4.19562C52.3686 1.4927 46.391 0.0619051 40.3223 0.0116266C34.2537 -0.0386519 28.2531 1.29291 22.7754 3.90542C17.2976 6.51793 12.4863 10.3429 8.7059 15.0905L8.29505 15.5917C2.90221 22.5841 -0.0155143 31.1697 6.20433e-05 40.0001C0.00106948 42.2816 0.194857 44.5589 0.579355 46.8078L0.764236 47.8801C1.84834 53.3662 4.08931 58.5583 7.33778 63.1102L7.72808 63.6525C11.4419 68.7192 16.2973 72.8396 21.9006 75.6797C27.5039 78.5199 33.6975 80 39.9795 80C46.2615 80 52.4552 78.5199 58.0585 75.6797C63.6618 72.8396 68.5171 68.7192 72.231 63.6525L72.6418 63.1102C75.9005 58.523 78.1416 53.2926 79.2153 47.7692C79.277 47.4487 79.3345 47.1324 79.392 46.8119C80.2313 41.9387 80.1645 36.9525 79.1948 32.1036L79.2195 32.0995ZM9.17837 61.2162C6.42779 57.2506 4.48197 52.7839 3.45117 48.0691C8.91543 48.6361 14.4372 49.0757 19.9138 49.3756C20.4852 54.3092 21.6423 59.1571 23.3608 63.8169C18.5878 63.2199 13.8526 62.3516 9.17837 61.2162ZM11.6681 64.4331C15.8711 65.3411 20.1603 66.0436 24.4783 66.5325L24.5194 66.627C26.438 70.8177 28.7716 74.125 31.3559 76.4011C23.6991 74.5788 16.8107 70.3914 11.6681 64.4331ZM38.71 77.3214C34.5399 76.6804 30.5629 72.9623 27.4939 66.8489C31.1915 67.1899 34.959 67.3789 38.71 67.4159V77.3214ZM38.71 64.8316C34.5358 64.7906 30.3575 64.5564 26.2573 64.1291C24.3882 59.4355 23.137 54.519 22.535 49.503C27.8554 49.7659 33.2786 49.9138 38.71 49.9138V64.8316ZM39.9754 46.5613V10.641L35.9984 13.558V46.5613H34.8398V18.4882L32.0461 16.4709V46.5613H31.8324H31.3312C30.9614 46.5613 30.5958 46.5613 30.2219 46.5284H29.8768H29.2605C28.9565 46.5284 28.6484 46.5284 28.3485 46.4915H28.1595C28.0855 46.4915 28.0034 46.4915 27.9294 46.4915L27.2063 46.4257L26.4791 46.4011L25.9902 46.3723H25.756V24.9426L23.1513 23.0404V46.2244H23.0691H22.802H22.7075C22.5062 46.2244 22.2967 46.1998 22.0954 46.1874H21.816L20.9943 46.1422C20.9368 46.1422 20.8752 46.1422 20.8218 46.1422L20.1356 46.1012C19.7248 46.0765 19.3139 46.056 18.9031 46.0272L17.7774 45.9533V25.6246L22.2104 22.3748L23.1143 21.7133L23.9729 22.3378L25.719 23.6155V19.7988L31.1422 15.8177L32.0461 15.1726H32.0707L32.9335 15.8053L34.8275 17.194V13.0855L35.9861 12.231L39.0757 9.97133L39.9631 9.31808L40.8669 9.98365L45.1356 13.1184V17.194L47.0132 15.8177L47.8965 15.1726L48.7799 15.8177L54.2318 19.7988V23.6279L55.9614 22.3625L56.8365 21.7256L57.7445 22.3871L62.1734 25.6369V45.9163L61.0477 45.9902L59.8357 46.0642L59.1496 46.1053C59.0962 46.1053 59.0346 46.1053 58.9771 46.1053L58.1554 46.1505H57.876C57.6706 46.1505 57.4651 46.1505 57.2597 46.1874H57.1611H56.8982H56.8242V23.0404L54.2318 24.9426V46.3477H53.9853L53.5087 46.3764C53.2622 46.3764 53.0198 46.3764 52.7733 46.4011L52.0379 46.4298H51.8653H51.627L50.7026 46.4668H50.0904H49.7494L48.6402 46.5038H48.1389C48.0691 46.5079 47.9992 46.5079 47.9294 46.5038V16.4709L45.1603 18.4882V46.5449L39.9754 46.5613ZM57.461 49.503C56.865 54.5175 55.6221 59.4338 53.7634 64.1291C49.655 64.5399 45.4808 64.7906 41.3024 64.8316V49.9261C46.7133 49.9097 52.1447 49.7659 57.461 49.503ZM41.2901 77.3214V67.4159C45.037 67.3789 48.8004 67.1899 52.5062 66.8489C49.4331 72.9623 45.4602 76.6804 41.2901 77.3214ZM48.6278 76.4175C51.2162 74.1414 53.558 70.8341 55.4684 66.6435L55.5095 66.549C59.8149 66.0649 64.0931 65.3642 68.3279 64.4496C63.1834 70.4115 56.2898 74.5994 48.6278 76.4175ZM70.8793 61.1505L70.8218 61.2326C66.147 62.3628 61.4119 63.227 56.6393 63.821C58.3559 59.1606 59.513 54.3129 60.0863 49.3797C65.5629 49.0798 71.0847 48.6402 76.5407 48.0773C75.5254 52.7579 73.6019 57.1938 70.8793 61.134V61.1505Z"
                  fill="#FBF0E2"
                />
                <path
                  d="M79.2402 47.7691L79.4046 46.8118C79.3594 47.1323 79.2936 47.4486 79.2402 47.7691Z"
                  fill="#FBF0E2"
                />
              </g>
              <defs>
                <clipPath id="clip0_64_2">
                  <rect width="80" height="80" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="preloader__overflow">
            <p>
              {array2.map((word, i) => (
                <span key={`w${i}`} className="array-2" ref={(el) => el && refs.current.push(el)}>
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="preloader__overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </section>
  );
};

export default Preloader;
