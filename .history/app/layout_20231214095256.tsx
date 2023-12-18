import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar, Footer } from '@/components'
import "../styles/globals.scss"

const autaut = localFont({
  src: './AutautGrotesk-Bolf.ttf',
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

const optician = localFont({
  src: './Optiker-K.ttf',
  display: "swap",
  variable: "--optician-font"
})

export const metadata: Metadata = {
  title: 'CaBric Engineering - Constructing a susutainable and eco-friendly future',
  description: 'CaBric Engineering is a leading force in the construction and architecture industry, dedicated to building a sustainable and eco-friendly future. With a strong commitment to innovative design and environmental stewardship, our projects reflect our pledge to sustainability and the use of cutting-edge architectural techniques. Join us as we shape the future of construction, one eco-friendly building at a time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gothic.variable} ${montserrat.variable} ${montserrat2.variable} ${optician.variable}`}>
        <>
          <Navbar/>
          {children}
          <Footer/>
        </>
      </body>
    </html>
  )
}
