import React from "react";
import { client } from "@/sanity/lib/client";
import { HomePageWrapper } from "@/components";

async function getProjects() {
  const query = `*[_type == "project" ] | order(_createdAt asc)[0...4]{
    _id,
  name,
  slug,
  mainimage,
  location,
  projecttype,
    propertytype-> {
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

  return <HomePageWrapper projects={projects} />;
};

export default Home;
