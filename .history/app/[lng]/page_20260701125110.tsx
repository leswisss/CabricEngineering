import React from "react";
import { getBlur } from "@/lib/getBlur";
import { HomePageWrapper } from "@/components";


//Blur Images
const blur = await getBlur("03_q2fklh.jpg");
const Home = () => {
  return <HomePageWrapper />;
};

export default Home;
