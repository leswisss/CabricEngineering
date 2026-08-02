import React from "react";
import { client } from "@/sanity/lib/client";
import { HomePageWrapper } from "@/components";

async function getProjects() {
  const query = `*[_type == "project" ] | order(_createdAt asc){
    _id,
  name,
  slug,
  mainimage,
  location,
  projecttype,
  year
  }`;

  const data = await client.fetch(query);
  return data;
}

const Home = () => {
  const projectsD = getProjects();


  return <HomePageWrapper />;
};

export default Home;
