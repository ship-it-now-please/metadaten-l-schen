import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EXIF Daten löschen & Metadaten entfernen - Kostenloses Online Tool | metadaten-löschen.de',
  description: 'Kostenloses EXIF Daten Tool zum Auslesen und Löschen von Metadaten aus Bildern, PDFs und Videos. EXIF Daten auslesen, Metadaten aus Bildern entfernen, PDF Metadaten entfernen. 100% kostenlos & sicher!',
  keywords: 'exif daten, exif daten löschen, exif daten auslesen, exif daten ändern, metadaten entfernen, metadaten auslesen, metadaten löschen, pdf metadaten entfernen, exif daten online, exif daten tool, metadaten aus bildern entfernen, exif daten auslesen online, exif daten entfernen, metadaten tool, exif metadaten, exif daten auslesen tool, metadaten aus bildern, exif daten löschen online, exif daten bearbeiten, exif daten anzeigen, exif daten auslesen mac, exif daten auslesen windows, exif daten auslesen android, exif daten auslesen iphone, datenschutz, privatsphäre, kostenlos, online tool',
  authors: [{ name: 'EXIF Daten Tool Team' }],
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
    title: 'EXIF Daten löschen & Metadaten entfernen - Kostenloses Online Tool',
    description: 'Kostenloses EXIF Daten Tool zum Auslesen und Löschen von Metadaten aus Bildern, PDFs und Videos. Schützen Sie Ihre Privatsphäre mit unserem EXIF Daten Löscher.',
    siteName: 'metadaten-löschen.de',
    images: [
      {
        url: 'https://metadaten-löschen.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EXIF Daten Tool - Metadaten entfernen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EXIF Daten löschen & Metadaten entfernen - Kostenloses Tool',
    description: 'Kostenloses EXIF Daten Tool zum Auslesen und Löschen von Metadaten. Schützen Sie Ihre Privatsphäre!',
    images: ['https://metadaten-löschen.de/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://metadaten-löschen.de',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
  category: 'Technology',
  classification: 'Utility Application',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
                    
                    {/* Favicon and App Icons */}
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                    <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
                    <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "EXIF Daten Tool - Metadaten entfernen",
              "description": "Kostenloses Online-Tool zum EXIF Daten auslesen, Metadaten entfernen und Privatsphäre schützen. EXIF Daten löschen aus Bildern, PDFs und Videos.",
              "url": "https://metadaten-löschen.de",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "softwareVersion": "1.0",
              "datePublished": "2024-01-01",
              "dateModified": "2024-12-19",
              "author": {
                "@type": "Organization",
                "name": "metadaten-löschen.de"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              },
              "featureList": [
                "EXIF Daten auslesen",
                "EXIF Daten löschen",
                "Metadaten aus Bildern entfernen",
                "PDF Metadaten entfernen",
                "GPS-Daten entfernen",
                "Kamera-Informationen löschen",
                "Zeitstempel entfernen",
                "Privatsphäre schützen"
              ],
              "screenshot": "https://metadaten-löschen.de/screenshot.jpg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Was sind EXIF Daten?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "EXIF Daten (Exchangeable Image File Format) sind versteckte Metadaten in digitalen Bildern, die detaillierte Informationen über die Aufnahme enthalten. Dazu gehören Kamera-Informationen, GPS-Koordinaten, Zeitstempel und Kameraeinstellungen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Warum sollte ich EXIF Daten löschen?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Das Löschen von EXIF Daten schützt Ihre Privatsphäre, da diese Metadaten Ihren Standort, Aufnahmezeit und sogar Ihre Kamera-Seriennummer preisgeben können. Besonders beim Teilen in sozialen Medien ist das Entfernen von Metadaten wichtig."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Welche Dateiformate werden unterstützt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wir unterstützen JPG, PNG, TIFF für Bilder, PDF für Dokumente, und MP4, MOV, AVI für Videos. Unser Tool kann Metadaten aus Bildern entfernen und PDF Metadaten entfernen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Sind meine Dateien sicher?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, alle Dateien werden nur in Ihrem Browser verarbeitet. Sie werden nicht an unsere Server übertragen oder gespeichert. Die Verarbeitung erfolgt 100% lokal für maximalen Datenschutz."
                  }
                }
              ]
            })
          }}
        />
        
        {/* HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Wie entferne ich EXIF Daten aus Bildern?",
              "description": "Schritt-für-Schritt Anleitung zum Entfernen von EXIF Daten und Metadaten aus Bildern",
              "image": "https://metadaten-löschen.de/howto-image.jpg",
              "totalTime": "PT2M",
              "supply": [
                {
                  "@type": "HowToSupply",
                  "name": "Bilddatei mit EXIF Daten"
                }
              ],
              "tool": [
                {
                  "@type": "HowToTool",
                  "name": "EXIF Daten Tool"
                }
              ],
              "step": [
                {
                  "@type": "HowToStep",
                  "name": "Datei hochladen",
                  "text": "Laden Sie Ihre Bilddatei in unser EXIF Daten Tool hoch",
                  "image": "https://metadaten-löschen.de/step1.jpg"
                },
                {
                  "@type": "HowToStep",
                  "name": "EXIF Daten anzeigen",
                  "text": "Das Tool zeigt Ihnen alle enthaltenen EXIF Metadaten an",
                  "image": "https://metadaten-löschen.de/step2.jpg"
                },
                {
                  "@type": "HowToStep",
                  "name": "Metadaten entfernen",
                  "text": "Klicken Sie auf 'EXIF Daten löschen' um alle Metadaten zu entfernen",
                  "image": "https://metadaten-löschen.de/step3.jpg"
                },
                {
                  "@type": "HowToStep",
                  "name": "Datei herunterladen",
                  "text": "Laden Sie die bereinigte Datei ohne EXIF Daten herunter",
                  "image": "https://metadaten-löschen.de/step4.jpg"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N5R87TG11H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N5R87TG11H');
          `}
        </Script>
      </body>
    </html>
  )
}
