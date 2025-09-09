import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'PDF Metadaten entfernen - Kostenloses Online Tool | metadaten-löschen.de',
  description: 'PDF Metadaten entfernen kostenlos! Autor, Erstellungsdatum, Schlüsselwörter aus PDF-Dokumenten löschen. 100% sicher, sofort verfügbar.',
  keywords: 'pdf metadaten entfernen, pdf metadaten löschen, pdf metadaten auslesen, pdf daten löschen, pdf autor entfernen, pdf ersteller löschen',
  alternates: {
    canonical: 'https://metadaten-löschen.de/pdf-metadaten-entfernen',
  },
}

export default function PDFMetadatenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            PDF Metadaten entfernen - Kostenloses Online Tool
          </h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-600 mb-6">
              Entfernen Sie alle Metadaten aus Ihren PDF-Dokumenten mit unserem kostenlosen Online-Tool. 
              Schützen Sie Ihre Privatsphäre und entfernen Sie Autor, Erstellungsdatum und andere sensible Informationen.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Was wird aus PDF-Dokumenten entfernt?
            </h2>
            <ul className="space-y-2 text-blue-800">
              <li>• Autor und Ersteller-Informationen</li>
              <li>• Erstellungs- und Änderungsdatum</li>
              <li>• Schlüsselwörter und Beschreibungen</li>
              <li>• Software-Informationen (Producer, Creator)</li>
              <li>• Titel und Betreff-Zeilen</li>
              <li>• Alle anderen versteckten Metadaten</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              href="/#tools" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center"
            >
              Jetzt PDF Metadaten entfernen
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Warum PDF Metadaten entfernen?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenschutz</h3>
                <p className="text-gray-600">
                  PDF-Dokumente enthalten oft sensible Informationen über den Ersteller, 
                  die Aufschluss über Ihre Identität und Arbeitsgewohnheiten geben können.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sichere Weitergabe</h3>
                <p className="text-gray-600">
                  Beim Teilen von PDF-Dokumenten werden automatisch Metadaten übertragen, 
                  die Sie möglicherweise nicht preisgeben möchten.
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
