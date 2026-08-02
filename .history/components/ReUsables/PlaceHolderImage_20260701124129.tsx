import React from "react";
import { CldImage } from "next-cloudinary";
import { getPlaiceholder } from "plaiceholder";

export default async function PlaceHolderImage({
  src,
  sizes,
  alt,
}: {
  src: string;
  sizes: string;
  alt: string;
}) {
  
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
  const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${src}`;

  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <CldImage
      src={src}
      fill
      placeholder="blur"
      blurDataURL={base64}
      alt={alt}
      sizes={sizes}
    />
  );
}
