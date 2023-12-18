import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'THE URBAN OASIS - ',
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