import React from "react";
import { getBlur } from "@/lib/getBlur";
import { HomePageWrapper } from "@/components";


//Blur Images
const blur = await getBlur("cld-sample-2.jpg");

const Home = () => {
  return <HomePageWrapper blur={blur}/>;
};

export default Home;
