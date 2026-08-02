// lib/getBlur.ts

import { getPlaiceholder } from "plaiceholder";

export async function getBlur(src: string) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

  const url = `https://res.cloudinary.com/${cloudName}/image/upload/${src}`;

  const buffer = Buffer.from(await (await fetch(url)).arrayBuffer());

  const { base64 } = await getPlaiceholder(buffer);

  return base64;
}