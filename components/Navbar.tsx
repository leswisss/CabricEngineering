"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import IMAGE from "../public/SVG/concept1brand.svg"
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [activeSide, setActiveSide] = useState(false);
  const navbar = useRef<HTMLHeadElement>(null)
  const [navbarStyles, setnavbarStyles] = useState({
    background: "transparent",
  })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = navbar.current

    if (navigation) {
      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+=500 top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.direction === -1 && self.scroll() < lastScroll) {
            gsap.to(navigation, { y: 0 });
          } else {
            gsap.to(navigation, { y: -navigation.offsetHeight});
          }
          lastScroll = self.scroll();
        },
        scrub: 0.3,
      });
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setnavbarStyles({
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.00) 100%)",
        })
      } else {
        setnavbarStyles({
          background: "transparent",
        })
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header className="navigation" ref={navbar} style={navbarStyles}>
        <div className="container navigation__container">
          <div className="navbar">
            <Link href="/portfolio" className="portfolio__button">PORTFOLIO</Link>
            <Link href="/" className="logo">
              <div className="logo__image">
                <Image src={IMAGE} fill quality={100} alt="Cabric Logo"/>
              </div>
            </Link>
            <div className="nav__menu" onClick={() => setActiveSide(true)}>
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
