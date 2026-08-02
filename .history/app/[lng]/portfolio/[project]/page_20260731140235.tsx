import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getAllProjectSlugs } from "@/sanity/lib/project";
import { urlFor } from "@/sanity/lib/image";
import { PropertyDetailPage } from "@/components";

type Props = {
  params: Promise<{ project: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs(); // returns ['slug-a','slug-b']
  return slugs.map((s) => ({ project: s }));
}

//MetaData
export async function generateMetadata({
  params,
}: {
  params: { project: string };
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const { project } = await params;
  const projectPost = await getProject(project);
  if (!projectPost) return {};
  const lng: string = "fr";
  const overviewText =
    lng === "en"
      ? projectPost.brief?.briefen
      : projectPost.brief?.brieffr;

  return {
    title: `${propertyPost.name} - SCI AFG`,
    description: `${overviewText ?? ""} ${propertyPost.gallery?.[0]?.caption ?? ""}`,
    openGraph: {
      images: [
        { url: urlFor(propertyPost.mainimage).width(1200).height(630).url() },
      ],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ property: string }>;
}) {
  const { property } = await params;
  const propertyDetail = await getProperty(property);
  const relatedProperties = await getRelatedProperties(property);

  if (!propertyDetail) {
    notFound();
  }

  return (
    <PropertyDetailPage
      property={propertyDetail}
      relatedProperties={relatedProperties}
    />
  );
}
