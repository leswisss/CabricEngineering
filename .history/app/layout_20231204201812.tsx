import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar, Footer } from '@/components'
import "../styles/globals.scss"

const gothic = localFont({
  src: './HandelGothic.ttf',
  weight: "800",
  display: 'swap',
  variable: '--gothic-font'
})

const montserrat = localFont({
  src: './MontserratRegular.ttf',
  display: "swap",
  variable: "--montserrat-font"
})

const montserrat2 = localFont({
  src: './Montserrat.ttf',
  display: "swap",
  variable: "--montserrat2-font"
})

export const metadata: Metadata = {
  title: 'CaBric Engineering - Constructing a susutainable and eco-friendly future',
  description: 'We conceive and reaise your dream house for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gothic.variable} ${montserrat.variable} ${montserrat2.variable}`}>
        <>
          <Navbar/>
          {children}
          <Footer/>
        </>
      </body>
    </html>
  )
}
