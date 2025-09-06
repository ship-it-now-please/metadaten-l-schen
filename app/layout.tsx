import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Metadaten löschen & anzeigen - Kostenloses Online Tool | metadaten-löschen.de',
  description: 'Kostenloses Tool zum Löschen und Anzeigen von Metadaten/EXIF-Daten aus Bildern, PDFs und Videos. Datenschutz & Privatsphäre online schützen. Jetzt verwenden!',
  keywords: 'metadaten löschen, exif daten löschen, metadaten entfernen, metadaten auslesen, exif daten auslesen, datenschutz, privatsphäre, kostenlos, online tool',
  authors: [{ name: 'Metadaten Tool' }],
  creator: 'metadaten-löschen.de',
  publisher: 'metadaten-löschen.de',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://metadaten-löschen.de',
    title: 'Metadaten löschen & anzeigen - Kostenloses Online Tool',
    description: 'Kostenloses Tool zum Löschen und Anzeigen von Metadaten/EXIF-Daten aus Bildern, PDFs und Videos. Datenschutz & Privatsphäre online schützen.',
    siteName: 'metadaten-löschen.de',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metadaten löschen & anzeigen - Kostenloses Online Tool',
    description: 'Kostenloses Tool zum Löschen und Anzeigen von Metadaten/EXIF-Daten aus Bildern, PDFs und Videos.',
  },
  alternates: {
    canonical: 'https://metadaten-löschen.de',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://metadaten-löschen.de" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Metadaten Tool",
              "description": "Kostenloses Tool zum Löschen und Anzeigen von Metadaten/EXIF-Daten",
              "url": "https://metadaten-löschen.de",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              },
              "featureList": [
                "Metadaten aus Bildern löschen",
                "EXIF-Daten anzeigen",
                "PDF Metadaten entfernen",
                "Datenschutz schützen"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
