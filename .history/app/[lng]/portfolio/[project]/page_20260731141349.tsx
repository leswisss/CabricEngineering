import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getAllProjectSlugs } from "@/sanity/lib/project";
import { urlFor } from "@/sanity/lib/image";
import ProjectDetailWrapper from "@/components/ProjectPage/ProjectDetailWrapper";

type Props = {
  params: Promise<{ lng: string; project: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs(); // returns ['slug-a','slug-b']
  return slugs.map((s) => ({ project: s }));
}

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lng, project } = await params;
  const projectPost = await getProject(project);
  if (!projectPost) return {};

  const overviewText =
    lng === "en" ? projectPost.brief?.briefen : projectPost.brief?.brieffr;

  return {
    title: `${projectPost.name} - CaBric Engineering`,
    description: `${overviewText ?? ""}`,
    openGraph: {
      images: [
        { url: urlFor(projectPost.mainimage).width(1200).height(630).url() },
      ],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const projectDetail = await getProject(project);

  if (!projectDetail) {
    notFound();
  }

  return <PropertyDetailPage property={propertyDetail} />;
}
