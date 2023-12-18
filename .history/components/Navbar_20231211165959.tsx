"use client";

import React, { useState } from "react";
import Link from "next/link";
import svgImage from "../public/images/cabriclogo.svg";
import Image from "next/image";
import LOGO from "../public/images/cabriclogo.png";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [activeSide, setActiveSide] = useState(false);

  return (
    <>
      <header className="navigation">
        <div className="container navigation__container">
          <div className="navbar">
            <Link href="/portfolio">PORTFOLIO</Link>
            <Link href="/" className="logo">
              {/* <div className="l-image__container">
                <Image
                  src={svgImage}
                  fill
                  alt="Logo Image"
                  quality={100}
                  sizes="100%"
                  className="back-image"
                />
              </div> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_64_2)">
                  <path
                    d="M79.2195 32.0996C77.9982 26.1011 75.4208 20.4615 71.6845 15.6123C67.9833 10.8027 63.236 6.89859 57.8023 4.19568C52.3686 1.49276 46.391 0.0619661 40.3223 0.0116876C34.2537 -0.0385909 28.2531 1.29297 22.7754 3.90548C17.2976 6.51799 12.4863 10.3429 8.7059 15.0905L8.29505 15.5918C2.90221 22.5842 -0.0155143 31.1697 6.20433e-05 40.0002C0.00106948 42.2817 0.194857 44.559 0.579355 46.8079L0.764236 47.8802C1.84834 53.3663 4.08931 58.5583 7.33778 63.1103L7.72808 63.6526C11.4419 68.7192 16.2973 72.8396 21.9006 75.6798C27.5039 78.52 33.6975 80 39.9795 80C46.2615 80 52.4552 78.52 58.0585 75.6798C63.6618 72.8396 68.5171 68.7192 72.231 63.6526L72.6418 63.1103C75.9005 58.5231 78.1416 53.2927 79.2153 47.7693C79.277 47.4488 79.3345 47.1324 79.392 46.812C80.2313 41.9388 80.1645 36.9526 79.1948 32.1037L79.2195 32.0996ZM9.17837 61.2163C6.42779 57.2507 4.48197 52.7839 3.45117 48.0692C8.91543 48.6361 14.4372 49.0757 19.9138 49.3757C20.4852 54.3092 21.6423 59.1571 23.3608 63.8169C18.5878 63.2199 13.8526 62.3517 9.17837 61.2163ZM11.6681 64.4332C15.8711 65.3412 20.1603 66.0437 24.4783 66.5326L24.5194 66.6271C26.438 70.8177 28.7716 74.125 31.3559 76.4011C23.6991 74.5789 16.8107 70.3915 11.6681 64.4332ZM38.71 77.3214C34.5399 76.6805 30.5629 72.9624 27.4939 66.849C31.1915 67.19 34.959 67.3789 38.71 67.4159V77.3214ZM38.71 64.8317C34.5358 64.7906 30.3575 64.5564 26.2573 64.1292C24.3882 59.4356 23.137 54.5191 22.535 49.503C27.8554 49.766 33.2786 49.9139 38.71 49.9139V64.8317ZM39.9754 46.5614V10.6411L35.9984 13.5581V46.5614H34.8398V18.4882L32.0461 16.471V46.5614H31.8324H31.3312C30.9614 46.5614 30.5958 46.5614 30.2219 46.5285H29.8768H29.2605C28.9565 46.5285 28.6484 46.5285 28.3485 46.4915H28.1595C28.0855 46.4915 28.0034 46.4915 27.9294 46.4915L27.2063 46.4258L26.4791 46.4011L25.9902 46.3724H25.756V24.9426L23.1513 23.0404V46.2245H23.0691H22.802H22.7075C22.5062 46.2245 22.2967 46.1998 22.0954 46.1875H21.816L20.9943 46.1423C20.9368 46.1423 20.8752 46.1423 20.8218 46.1423L20.1356 46.1012C19.7248 46.0766 19.3139 46.056 18.9031 46.0273L17.7774 45.9533V25.6246L22.2104 22.3748L23.1143 21.7134L23.9729 22.3379L25.719 23.6156V19.7988L31.1422 15.8177L32.0461 15.1727H32.0707L32.9335 15.8054L34.8275 17.1941V13.0856L35.9861 12.231L39.0757 9.97139L39.9631 9.31814L40.8669 9.98371L45.1356 13.1185V17.1941L47.0132 15.8177L47.8965 15.1727L48.7799 15.8177L54.2318 19.7988V23.6279L55.9614 22.3625L56.8365 21.7257L57.7445 22.3872L62.1734 25.637V45.9163L61.0477 45.9903L59.8357 46.0642L59.1496 46.1053C59.0962 46.1053 59.0346 46.1053 58.9771 46.1053L58.1554 46.1505H57.876C57.6706 46.1505 57.4651 46.1505 57.2597 46.1875H57.1611H56.8982H56.8242V23.0404L54.2318 24.9426V46.3477H53.9853L53.5087 46.3765C53.2622 46.3765 53.0198 46.3765 52.7733 46.4011L52.0379 46.4299H51.8653H51.627L50.7026 46.4669H50.0904H49.7494L48.6402 46.5038H48.1389C48.0691 46.5079 47.9992 46.5079 47.9294 46.5038V16.471L45.1603 18.4882V46.5449L39.9754 46.5614ZM57.461 49.503C56.865 54.5176 55.6221 59.4338 53.7634 64.1292C49.655 64.54 45.4808 64.7906 41.3024 64.8317V49.9262C46.7133 49.9098 52.1447 49.766 57.461 49.503ZM41.2901 77.3214V67.4159C45.037 67.3789 48.8004 67.19 52.5062 66.849C49.4331 72.9624 45.4602 76.6805 41.2901 77.3214ZM48.6278 76.4176C51.2162 74.1415 53.558 70.8342 55.4684 66.6435L55.5095 66.549C59.8149 66.0649 64.0931 65.3642 68.3279 64.4496C63.1834 70.4116 56.2898 74.5995 48.6278 76.4176ZM70.8793 61.1505L70.8218 61.2327C66.147 62.3629 61.4119 63.227 56.6393 63.821C58.3559 59.1607 59.513 54.313 60.0863 49.3798C65.5629 49.0799 71.0847 48.6402 76.5407 48.0774C75.5254 52.7579 73.6019 57.1939 70.8793 61.1341V61.1505Z"
                    fill="black"
                  />
                  <path
                    d="M79.2402 47.7691L79.4046 46.8118C79.3594 47.1323 79.2936 47.4486 79.2402 47.7691Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_64_2">
                    <rect width="60" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* <h3>CABRIC</h3> */}
            </Link>
            <div className="nav__menu" onClick={() => setActiveSide(true)}>
              {/* <span className="m-ball"></span> */}
              <span>MENU</span>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {activeSide && (
          <Sidebar activeSide={activeSide} setActiveSide={setActiveSide} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
