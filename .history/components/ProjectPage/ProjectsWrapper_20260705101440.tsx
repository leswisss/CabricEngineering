import React from "react";
import { StaticImageData } from "next/image";
import styles from "../../styles/pro"

interface ProjectsData {
  name: string;
  year: string;
  location: string;
  type: string;
  image: StaticImageData;
}

const ProjectsWrapper = ({ projects }: { projects: ProjectsData[] }) => {
  return <div>
    
  </div>;
};

export default ProjectsWrapper;
