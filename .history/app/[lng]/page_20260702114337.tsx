import React from "react";
import { getBlur } from "@/lib/getBlur";
import { HomePageWrapper } from "@/components";

//PlaceHolders Images
const [blur, blur2, blur3, blur4, blur5, blur6] = await Promise.all([
  getBlur("03_q2fklh.jpg"),
  getBlur("05_xpcycv.jpg"),
]);

const Home = () => {
  return <HomePageWrapper blur={blur} blur2={blur2} />;
};

export default Home;
