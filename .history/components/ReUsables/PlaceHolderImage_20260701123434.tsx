import React from "react";
import { CldImage } from "next-cloudinary";
import { getPlaiceholder } from "plaiceholder";

export default async function PlaceHolderImage({ src, sizes }: { src: string, sizes: string, alt: string }) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });
  return <CldImage
  
  />;
}
