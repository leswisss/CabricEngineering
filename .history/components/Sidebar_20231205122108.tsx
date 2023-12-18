"use client";

import React, {useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion"
import SideNavigation from "./SideNavigation";
import { sideBarProps } from '@/types';
import { sideBarAnim, hoverSlide } from "@/animations";
import { Icon } from '@iconify/react';
import xLight from '@iconify/icons-ph/x-light';

import "../styles/Sidebar.scss"


const Sidebar = ({activeSide, setActiveSide}: sideBarProps) => {
  const [activeHover, setActiveHover] = useState(false)

  return (
    <motion.section variants={sideBarAnim} initial="initial" animate="entry" exit="exit" className="sidebar">
      <div className="sidebar__container">
        <div className="left__section">
          <span className="s-dash"></span>
          <div className="cabric__name-container" onMouseEnter={() => setActiveHover(true)} onMouseLeave={() => setActiveHover(false)}>
            <motion.div variants={hoverSlide} animate={activeHover ? "entry" : "initial"} className="name__slider">
              <h3>CABRIC ENGINEERING</h3>
              <h3>CABRIC ENGINEERING</h3>
            </motion.div>
          </div>
          <span>est. 2021</span>
        </div>
        <div className="right__section">
          <div className="s-contact">
            <h4>CONTACT</h4>
            <span className="s-location">Rue 1214 Elig Efa Yaounde, Cameroon</span>
            <Link href="mailto:contact@cabricengineering.com">contact@cabricengineering.com</Link>
            <span>+237 690 000 000</span>
          </div>

          <SideNavigation activeSide={activeSide} setActiveSide={setActiveSide}/>

          <div className="close__button" onClick={() => setActiveSide(false)}>
            <span>CLOSE</span>
          </div>

          <div className="close__button2" onClick={() => setActiveSide(false)}>
            <Icon icon={xIcon} />
          </div>
          <div className="s-social__links">
            <Link href="/">X</Link>
            <Link href="/">FACEBOOK</Link>
            <Link href="/">INSTAGRAM</Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Sidebar;
