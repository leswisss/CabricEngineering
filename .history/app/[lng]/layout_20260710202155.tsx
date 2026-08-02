import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../styles/globals.scss";

import {
  initServerI18next,
  getT,
  getResources,
  generateI18nStaticParams,
} from "next-i18next/server";
import { I18nProvider } from "next-i18next/client";
import i18nConfig from "../../i18n.config";

/  },
  };
}/Translation
initServerI18next(i18nConfig);

type Props = {
  params: Promise<{ lng: string }>;
};

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { lng } = await params;
  const { t } = await getT();

  return {
    title: t("seo:h_t"),
    description: t("seo:h_d"),
    applicationName: "CaBric Engineering",
    twitter: {
      card: "summary_large_image",
  


export async function generateStaticParams() {
  return generateI18nStaticParams();
}

const regular = localFont({
  src: "../fonts/SF-Pro-Display-Regular.ttf",
  variable: "--regular-font",
});

const medium = localFont({
  src: "../fonts/SF-Pro-Display-Medium.ttf",
  variable: "--medium-font",
});

const ttnormal = localFont({
  src: "../fonts/TTNormsProMono-Medium.ttf",
  variable: "--ttnormal",
});

const ttbold = localFont({
  src: "../fonts/TTNormsProMono-DemiBold.ttf",
  variable: "--ttbold",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
  const { lng } = await params;
  const { i18n } = await getT();

  if (process.env.NODE_ENV === "development") {
    await i18n.reloadResources(i18nConfig.supportedLngs, i18nConfig.ns);
  }

  const resources = getResources(i18n);

  return (
    <html
      lang={lng}
      className={`${regular.variable} ${medium.variable} ${ttnormal.variable} ${ttbold.variable}`}
    >
      <body>
        <I18nProvider
          fallbackLng={i18nConfig.fallbackLng}
          language={lng}
          resources={resources}
        >
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
