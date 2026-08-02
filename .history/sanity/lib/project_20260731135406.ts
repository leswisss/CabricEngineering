import { client } from "@/sanity/lib/client"; // adjust import to your client path


export async function getProject(project: string) {
  const query = `*[_type == "property" && slug.current == "${property}"][0] {
    _id,
name,
  slug,
  price,
  quarter,
  transaction-> {
    nameen,
    namefr,
    slug
  },
  city->{
    cityname,
    slug
  },
  area,
  mainimage,
  propertytype-> {
    nameen,
    namefr,
    slug
  },
  rentpricing,
  bath,
  room
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
