import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar, Footer } from '@/components'
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.scss"



const aeonik = localFont({
  src: "./AeonikProTRIAL-Regular.ttf",
  display: "swap",
  variable: "--aeonik-font"
})

const aeonikBold = localFont({
  src: "./AeonikProTRIAL-Bold.ttf",
  display: "swap",
  variable: "--aeonikbold-font"
})

export const metadata: Metadata = {
  title: 'CaBric Engineering - Constructing a susutainable and eco-friendly future',
  description: 'CaBric Engineering is a leading force in the construction and architecture industry, dedicated to building a sustainable and eco-friendly future. With a strong commitment to innovative design and environmental stewardship, our projects reflect our pledge to sustainability and the use of cutting-edge architectural techniques. Join us as we shape the future of construction, one eco-friendly building at a time.',
  icons: {
    icon: "../public/images/icon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${aeonik.variable} ${aeonikBold.variable}`}>
        <>
          <Navbar/>
          {children}
          <Footer/>
          <Analytics />
        </>
      </body>
    </html>
  )
}
