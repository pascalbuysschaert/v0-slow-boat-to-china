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
  description: 'Authentieke Yang-stijl Taijiquan in Leuven. Wekelijkse groepslessen op vrijdagavond. Verbonden aan de Chuan Cheng Academy van meester Liang Dehua.',
  keywords: ['Taijiquan', 'Tai Chi', 'Taiji', 'Yang stijl', 'Leuven', 'België', 'tai chi lessen Leuven', 'taiji Leuven', 'taijiquan cursus', 'vechtkunst', 'Qi', 'meditatie', 'Erik Elsemans', 'Elsemans', 'YMAA Belgium'],
  authors: [{ name: 'Slow Boat To China' }],
  openGraph: {
    title: 'Slow Boat To China | Yang-stijl Taijiquan in Leuven',
    description: 'Authentieke Yang-stijl Taijiquan in Leuven. Wekelijkse lessen op vrijdagavond.',
    type: 'website',
    url: 'https://slowboattochina.be',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  name: 'Slow Boat To China',
  alternateName: 'Slow Boat to China Taijiquan',
  description: 'Authentieke Yang-stijl Taijiquan in Leuven, België. Wekelijkse groepslessen op vrijdagavond onder begeleiding van gecertificeerd instructeur Erik Elsemans, verbonden aan de Chuan Cheng Academy van meester Liang Dehua.',
  url: 'https://slowboattochina.be',
  sport: 'Taijiquan',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Leuven',
    addressRegion: 'Vlaams-Brabant',
    addressCountry: 'BE',
  },
  location: {
    '@type': 'Place',
    name: 'HH Heverlee, Leuven',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${notoSerif.variable} ${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
