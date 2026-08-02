"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";

const ProjectPageWrapper = () => {
  const HomePageWrapper = ({}: {}) => {
    //Smooth Scroll
    useEffect(() => {
      const lenisInstance = new Lenis({
        duration: 1.2,
      });
  
      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);
    
  return (
    <div>ProjectPageWrapper</div>
  )
}

export default ProjectPageWrapper