import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CaBric Portfolio - ',
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