import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About CaBric - Building Tomorrow's SustainableWorld Today ",
  description: "About Us",
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