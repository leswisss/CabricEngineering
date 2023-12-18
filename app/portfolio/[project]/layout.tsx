import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'THE URBAN OASIS - Spans an area of 400 square meters and comprises residential apartments, office spaces.',
  description: "Project Urban Oasis",
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