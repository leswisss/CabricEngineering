import React from "react";
import { HomePageWrapper } from "@/components";

async function getProperty() {
  const query = `*[_type == "property" && available ] | order(_createdAt asc){
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
  return (
    <HomePageWrapper
    />
  );
};

export default Home;
