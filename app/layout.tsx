import type { Metadata, Viewport } from 'next'
import { Noto_Serif, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSerif = Noto_Serif({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Slow Boat To China | Yang-stijl Taijiquan in Leuven',
  description: 'Een reis naar het innerlijke met authentieke Yang-stijl Taijiquan. Onder de begeleiding van de Chuan Cheng Academy-lijn van meester Liang Dehua.',
  keywords: ['Taijiquan', 'Tai Chi', 'Yang-stijl', 'Leuven', 'België', 'vechtkunst', 'Qi', 'meditation'],
  authors: [{ name: 'Slow Boat To China' }],
  openGraph: {
    title: 'Slow Boat To China | Yang-stijl Taijiquan in Leuven',
    description: 'Een reis naar het innerlijke met authentieke Yang-stijl Taijiquan.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${notoSerif.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
