import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Realce da Beleza',
  description: 'Aluguer de vestidos elegantes em Camama, Angola',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${playfair.variable} ${poppins.variable} font-body`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}