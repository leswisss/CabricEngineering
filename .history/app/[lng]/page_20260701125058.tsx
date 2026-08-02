import React from "react";
import { getBlur } from "@/lib/getBlur";
import { HomePageWrapper } from "@/components";


//Blur Images
const blur = await getBlur(image.publicId);
const Home = () => {
  return <HomePageWrapper />;
};

export default Home;
