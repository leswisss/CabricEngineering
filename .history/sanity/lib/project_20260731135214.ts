import { client } from "@/sanity/lib/client"; // adjust import to your client path

export async function getAllProhectSlugs(): Promise<string[]> {
  const query = `*[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }`;

  const projects = await client.fetch(query);
  return projects.map((project: { slug: string }) => property.slug);
}