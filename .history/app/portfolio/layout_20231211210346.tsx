import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Work - Sustainable Projects",
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