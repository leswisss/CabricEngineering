import React from "react";
import { StaticImageData } from "next/image";

interface ProjectsData {
  name: string;
  year: string;
  location: string;
  type: string;
  image: StaticImageD;
}
const ProjectsWrapper = ({ projects }: {}) => {
  return <div>ProjectsWrapper</div>;
};

export default ProjectsWrapper;
