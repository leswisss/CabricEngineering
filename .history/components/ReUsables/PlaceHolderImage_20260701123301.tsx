import React from "react";
import { CldImage } from "next-cloudinary";
import { getPlaiceholder } from "plaiceholder";

export default async function PlaceHolderImage({ src }: { src: string }) {
  const buffer = await fetch (src).then()
  return <div>PlaceHolderImage</div>;
}
