import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Emre CEVAHİR | BT Öğretmeni',
    template: '%s | Emre CEVAHİR',
  },
  description:
    'Bilişim Teknolojileri öğretmeni portfolyosu. Kodlama, algoritmik düşünme, siber güvenlik ve dijital okuryazarlık üzerine yazılar.',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Emre CEVAHİR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  )
}
