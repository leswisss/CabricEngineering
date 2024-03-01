"use client";
export const runtime = "edge";

import React, { useState } from "react";
import {
  ProjectHero,
  ProjectAbout,
  ProjectHorizontal,
  ProjectDetails,
  MoreProjects,
  Preloader,
} from "@/components";

const ProjectPageWrapper = () => {
  const [onComplete1, setOnComplete1] = useState(false);
  const [onComplete2, setOnComplete2] = useState(false);

  return (
    <>
      {!onComplete2 && (
        <Preloader
          onComplete1={onComplete1}
          setOnComplete1={setOnComplete1}
          onComplete2={onComplete2}
          setOnComplete2={setOnComplete2}
        />
      )}
      <ProjectHero />
      <ProjectAbout />
      <ProjectHorizontal />
      <ProjectDetails />
      <MoreProjects />
    </>
  );
};

export default ProjectPageWrapper;