import React from "react";
import { client } from "@/sanity/lib/client";
import { HomePageWrapper } from "@/components";

async function getProject() {
  const query = `*[_type == "project" ] | order(_createdAt asc){
    _id,
name,
  slug,
  price,
  quarter,
  transaction-> {
    nameen,
    namefr,
    slug
  },
  city->{
    cityname,
    slug
  },
  area,
  mainimage,
  propertytype-> {
    nameen,
    namefr,
    slug
  },
  rentpricing,
  bath,
  room
  }`;

  const data = await client.fetch(query);
  return data;
}

const Home = () => {
  return <HomePageWrapper />;
};

export default Home;
