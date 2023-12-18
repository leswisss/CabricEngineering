import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '“Our Work - CaBric Engineering's Sustainable Projects ',
  description: "Our Portfolio",
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