import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'BT Öğretmeni | Portfolyo & Blog',
    template: '%s | BT Öğretmeni',
  },
  description:
    'Bilişim Teknolojileri öğretmeni portfolyosu. Kodlama, algoritmik düşünme, siber güvenlik ve dijital okuryazarlık üzerine yazılar.',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'BT Öğretmeni',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
