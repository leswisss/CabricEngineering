import { client } from "@/sanity/lib/client"; // adjust import to your client path

export async function getAllProhectSlugs(): Promise<string[]> {
  const query = `*[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }`;

  const properties = await client.fetch(query);
  return properties.map((property: { slug: string }) => property.slug);
}