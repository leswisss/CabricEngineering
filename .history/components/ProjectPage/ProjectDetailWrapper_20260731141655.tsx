"use client";

import React, { useEffect, useState } from "react";

import { IProject } from "@/utils/type";

const ProjectDetailWrapper = ({ project }: { project: IProject }) => {
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
  return <></>;
};

export default ProjectDetailWrapper;
