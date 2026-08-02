import React from "react";
import { client } from "@/sanity/lib/client";
import { ProjectPageWrapper } from "@/components";

async function getProjects() {
  const query = `*[_type == "project" ] | order(_createdAt desc){
    _id,
  name,
  slug,
  mainimage,
  location,
  projecttype,
    clienttype-> {
    nameen,
    namefr,
    slug
  },
  year
  }`;

  const data = await client.fetch(query);
  return data;
}

const Home = async () => {
  const projectsData = getProjects();

  const projects = await projectsData;

  return <ProjectPageWrapper projects={projects} />;
};

export default Home;
