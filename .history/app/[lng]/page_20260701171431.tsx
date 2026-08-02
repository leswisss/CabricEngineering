import React from "react";
import { getBlur } from "@/lib/getBlur";
import { HomePageWrapper } from "@/components";


//PlaceHolders Images
const blur = await getBlur("03_q2fklh.jpg");
const blur2 = await getBlur("05_xpcycv.jpg");

const Home = () => {
  return <HomePageWrapper blur={blur} blur/>;
};

export default Home;
