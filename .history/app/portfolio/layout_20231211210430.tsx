import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Work - Sustainable Projects",
  description: "“Explore CaBric Engineering's portfolio of eco-friendly construction and innovative architectural projects. Witness how we're shaping a sustainable future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}