import type { Metadata } from "next";
import { getT } from "next-i18next/server";

type Props = {
  params: Promise<{ lng: string }>;
};

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { lng } = await params;
  const { t } = await getT();

  return {
    title: t("seo:pr"),
    description: t("seo:metadesc"),
    applicationName: "CaBric Engineering",
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

