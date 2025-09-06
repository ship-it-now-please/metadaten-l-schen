'use client'

import { useState, useRef } from 'react'
import { Upload, Download, Eye, Trash2, FileText, Image, File, AlertCircle, CheckCircle } from 'lucide-react'
import { MetadataReader } from '@/components/MetadataReader'
import { MetadataRemover } from '@/components/MetadataRemover'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'read' | 'remove'>('read')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                metadaten-löschen.de
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#tools" className="text-gray-600 hover:text-gray-900">Tools</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">Über uns</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Metadaten löschen & anzeigen
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Kostenloses Online-Tool zum Schutz Ihrer Privatsphäre. Löschen oder lesen Sie Metadaten/EXIF-Daten aus Bildern, PDFs und Videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>100% kostenlos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Datenschutz garantiert</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Keine Anmeldung erforderlich</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tools Section */}
      <section id="tools" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-200 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('read')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'read' ? 'tab-active' : 'tab-inactive'
                }`}
              >
                <Eye className="w-5 h-5 inline mr-2" />
                Metadaten anzeigen
              </button>
              <button
                onClick={() => setActiveTab('remove')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'remove' ? 'tab-active' : 'tab-inactive'
                }`}
              >
                <Trash2 className="w-5 h-5 inline mr-2" />
                Metadaten löschen
              </button>
            </div>
          </div>

          {/* Tool Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {activeTab === 'read' ? <MetadataReader /> : <MetadataRemover />}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Warum Metadaten wichtig sind
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Privatsphäre-Risiko</h3>
              <p className="text-gray-600">
                Metadaten können Ihren Standort, Aufnahmezeit und sogar die verwendete Kamera verraten.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Daten in PDFs</h3>
              <p className="text-gray-600">
                PDF-Dokumente enthalten oft Autoreninformationen, Erstellungsdatum und andere sensible Daten.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Einfache Lösung</h3>
              <p className="text-gray-600">
                Unser Tool entfernt alle Metadaten sicher und schnell, ohne die Dateiqualität zu beeinträchtigen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Unterstützte Dateiformate
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Image className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold">Bilder</h3>
              <p className="text-sm text-gray-600">JPG, PNG, TIFF</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <h3 className="font-semibold">PDFs</h3>
              <p className="text-sm text-gray-600">Alle PDF-Versionen</p>
            </div>
            <div className="text-center">
              <File className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold">Videos</h3>
              <p className="text-sm text-gray-600">MP4, MOV, AVI</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-semibold">Dokumente</h3>
              <p className="text-sm text-gray-600">DOCX, XLSX, PPTX</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Was sind Metadaten?</h3>
              <p className="text-gray-600">
                Metadaten sind versteckte Informationen in Dateien, die Details über die Erstellung, 
                den Autor, den Standort und andere Eigenschaften enthalten können.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sind meine Dateien sicher?</h3>
              <p className="text-gray-600">
                Ja, alle Dateien werden nur in Ihrem Browser verarbeitet. Sie werden nicht an unsere 
                Server übertragen oder gespeichert.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Funktioniert das Tool kostenlos?</h3>
              <p className="text-gray-600">
                Ja, unser Tool ist vollständig kostenlos und erfordert keine Anmeldung oder Registrierung.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Welche Metadaten werden entfernt?</h3>
              <p className="text-gray-600">
                Wir entfernen alle EXIF-Daten, GPS-Koordinaten, Kamera-Informationen, 
                Erstellungsdaten und andere sensible Metadaten aus Ihren Dateien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">metadaten-löschen.de</h3>
              <p className="text-gray-400">
                Kostenloses Tool zum Schutz Ihrer Privatsphäre durch Entfernung von Metadaten.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tools" className="hover:text-white">Metadaten anzeigen</a></li>
                <li><a href="#tools" className="hover:text-white">Metadaten löschen</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/datenschutz" className="hover:text-white">Datenschutz</a></li>
                <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
                <li><a href="/agb" className="hover:text-white">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 metadaten-löschen.de. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
