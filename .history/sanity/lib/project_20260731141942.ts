import { client } from "@/sanity/lib/client"; // adjust import to your client path

export async function getProject(project: string) {
  const query = `*[_type == "project" && slug.current == "${project}"][0] {
    _id,
  name,
  slug,
  mainimage,
  location,
  intro,
  rooms,
  features,
  brief,
  projecttype,
    clienttype-> {
    nameen,
    namefr,
    slug
  },
  year
  }`;

  const data = await client.fetch(query);
  return data;
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const query = `*[_type == "project" && defined(slug.current)]{
    "slug": slug.current
  }`;

  const projects = await client.fetch(query);
  return projects.map((project: { slug: string }) => project.slug);
}
