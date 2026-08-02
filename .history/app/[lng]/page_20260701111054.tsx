import React from "react";
import { HomePageWrapper } from "@/components";

// Generate static params for supported locales
export async function generateStaticParams() {
  return [{ lng: "en" }, { lng: "fr" }];
}

const Home = () => {
  return <HomePageWrapper />;
};

export default Home;
