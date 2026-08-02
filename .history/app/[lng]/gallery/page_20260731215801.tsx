import React from "react";
import { client } from "@/sanity/lib/client";
import { GalleryPageWrapper } from "@/components";

async function getGallery() {
  const query = `*[_type == "gallery" ] | order(_createdAt asc){
    _id,
  image,
  }`;

  const data = await client.fetch(query);
  return data;
}

const Home = async () => {
  const galleryData = getGallery();

  const gallery = await galleryData;

  return <GalleryPageWrapper i/>;
};

export default Home;
