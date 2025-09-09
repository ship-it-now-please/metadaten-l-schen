import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EXIF Daten löschen - Kostenloses Online Tool | metadaten-löschen.de',
  description: 'EXIF Daten löschen kostenlos! GPS, Kamera-Info, Zeitstempel aus Bildern entfernen. 100% sicher, sofort verfügbar, lokale Verarbeitung.',
  keywords: 'exif daten löschen, exif daten entfernen, exif daten auslesen, gps daten entfernen, kamera daten löschen, bilder metadaten entfernen',
  alternates: {
    canonical: 'https://metadaten-löschen.de/exif-daten-loeschen',
  },
}

export default function EXIFDatenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            EXIF Daten löschen - Kostenloses Online Tool
          </h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-600 mb-6">
              Löschen Sie alle EXIF-Daten aus Ihren Bildern mit unserem kostenlosen Online-Tool. 
              Entfernen Sie GPS-Koordinaten, Kamera-Informationen und Zeitstempel für maximalen Datenschutz.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">
              Was werden aus Bildern entfernt?
            </h2>
            <ul className="space-y-2 text-green-800">
              <li>• GPS-Koordinaten und Standortdaten</li>
              <li>• Aufnahmedatum und -zeit</li>
              <li>• Kamera- und Objektiv-Informationen</li>
              <li>• Kameraeinstellungen (ISO, Blende, Verschlusszeit)</li>
              <li>• Seriennummer der Kamera</li>
              <li>• Bearbeitungssoftware-Informationen</li>
              <li>• Alle anderen EXIF-Metadaten</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              href="/#tools" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg inline-flex items-center"
            >
              Jetzt EXIF Daten löschen
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Warum EXIF Daten löschen?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Privatsphäre schützen</h3>
                <p className="text-gray-600">
                  EXIF-Daten verraten Ihren genauen Aufenthaltsort, wann Sie das Foto gemacht haben 
                  und sogar welche Kamera Sie verwendet haben.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sichere Weitergabe</h3>
                <p className="text-gray-600">
                  Beim Teilen in sozialen Medien oder per E-Mail werden EXIF-Daten automatisch 
                  mit übertragen und können von anderen eingesehen werden.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professionelle Nutzung</h3>
                <p className="text-gray-600">
                  Für professionelle Zwecke sollten Bilder ohne persönliche Metadaten 
                  geteilt werden, um die Privatsphäre zu wahren.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Zurück zur Hauptseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
