import React from "react";
import { client } from "@/sanity/lib/client";
import { ProjectPageWrapper } from "@/components";

async function getProjects() {
  const query = `*[_type == "project" ] | order(_createdAt asc)[0...4]{
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


const Home = () => {
  return <ProjectPageWrapper />;
};

export default Home;
