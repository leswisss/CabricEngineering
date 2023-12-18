"use client";

import React, { useState } from "react";
import Link from "next/link";
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
                  src={LOGO}
                  fill
                  alt="Logo Image"
                  quality={100}
                  sizes="100%"
                  className="back-image"
                />
              </div> */}
              <h3>CABRIC</h3>
            </Link>
            <div className="nav__menu" onClick={() => setActiveSide(true)}>
              <span className="m-ball"></span>
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
