import React from "react";
import { client } from "@/sanity/lib/client";
import { GalleryPageWrapper } from "@/components";

async function getGallery() {
  const query = `*[_type == "gallery" ] | order(_createdAt asc)[0...4]{
    _id,
  mainimage,
  }`;

  const data = await client.fetch(query);
  return data;
}

const Home = () => {
  return <GalleryPageWrapper />;
};

export default Home;
