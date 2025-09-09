import type { Metadata } from 'next'
import Link from 'next/link'
import { Smartphone, Shield, AlertTriangle, CheckCircle, Download, Camera, MapPin, Calendar, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'EXIF Daten iPhone löschen - So einfach geht\'s | metadaten-löschen.de',
  description: 'EXIF Daten iPhone löschen: Komplette Anleitung für iOS-Geräte. Schützen Sie Ihre Privatsphäre und entfernen Sie GPS-Koordinaten, Kamera-Informationen und Zeitstempel aus iPhone-Fotos.',
  keywords: 'exif daten iphone löschen, exif daten iphone entfernen, metadaten iphone löschen, gps daten iphone entfernen, iphone fotos metadaten löschen, exif daten ios löschen',
  alternates: {
    canonical: 'https://metadaten-löschen.de/exif-daten-iphone-loeschen',
  },
}

export default function EXIFDateniPhonePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              EXIF Daten iPhone löschen - So einfach geht's
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Schützen Sie Ihre Privatsphäre auf dem iPhone! Erfahren Sie, wie Sie EXIF-Daten aus Ihren Fotos entfernen und GPS-Koordinaten, Kamera-Informationen und Zeitstempel sicher löschen.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Veröffentlicht am 19. Dezember 2024</span>
              <span className="mx-2">•</span>
              <span>5 Minuten Lesezeit</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                Warum EXIF-Daten auf dem iPhone gefährlich sind
              </h2>
              <p className="text-blue-800 mb-4">
                Jedes Foto, das Sie mit Ihrem iPhone aufnehmen, enthält versteckte EXIF-Daten. Diese Metadaten verraten:
              </p>
              <ul className="list-disc list-inside text-blue-800 space-y-2">
                <li><strong>GPS-Koordinaten:</strong> Ihren exakten Aufenthaltsort</li>
                <li><strong>Aufnahmezeit:</strong> Wann Sie das Foto gemacht haben</li>
                <li><strong>Kamera-Informationen:</strong> iPhone-Modell, iOS-Version</li>
                <li><strong>Kameraeinstellungen:</strong> ISO, Blende, Verschlusszeit</li>
                <li><strong>Bearbeitungssoftware:</strong> Welche Apps Sie verwendet haben</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Methode 1: EXIF-Daten mit unserem Online-Tool löschen
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Die einfachste und schnellste Methode ist unser kostenloses Online-Tool. Es funktioniert direkt in Ihrem iPhone-Browser:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Schritt-für-Schritt Anleitung
              </h3>
              <ol className="list-decimal list-inside text-green-800 space-y-3">
                <li>Öffnen Sie Safari auf Ihrem iPhone</li>
                <li>Besuchen Sie <strong>metadaten-löschen.de</strong></li>
                <li>Klicken Sie auf "Jetzt EXIF Daten löschen"</li>
                <li>Wählen Sie Ihre Fotos aus der Galerie aus</li>
                <li>Warten Sie, bis die Verarbeitung abgeschlossen ist</li>
                <li>Laden Sie die bereinigten Fotos herunter</li>
              </ol>
            </div>

            <div className="text-center mb-8">
              <Link 
                href="/#tools" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center"
              >
                <Download className="w-6 h-6 mr-2" />
                Jetzt EXIF Daten iPhone löschen
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Methode 2: EXIF-Daten in der Fotos-App entfernen
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              iOS bietet auch eingebaute Funktionen zum Entfernen von EXIF-Daten:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Über "Teilen" → "Optionen"
              </h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Öffnen Sie das Foto in der Fotos-App</li>
                <li>Tippen Sie auf "Teilen" (Quadrat mit Pfeil)</li>
                <li>Wählen Sie "Optionen"</li>
                <li>Deaktivieren Sie "Standort"</li>
                <li>Teilen Sie das Foto (z.B. per E-Mail)</li>
                <li>Speichern Sie das geteilte Foto</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Methode 3: EXIF-Daten mit Drittanbieter-Apps entfernen
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Für erweiterte Funktionen können Sie spezialisierte Apps verwenden:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">EXIF Viewer</h3>
                <p className="text-gray-600 mb-4">
                  Kostenlose App zum Anzeigen und Entfernen von EXIF-Daten. 
                  Einfache Bedienung, perfekt für Anfänger.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                  <span>Kostenlos</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Photo Investigator</h3>
                <p className="text-gray-600 mb-4">
                  Professionelle App mit erweiterten Funktionen. 
                  Batch-Verarbeitung für mehrere Fotos.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                  <span>€2,99</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Was passiert mit den EXIF-Daten?
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Wichtige Hinweise
              </h3>
              <ul className="list-disc list-inside text-yellow-800 space-y-2">
                <li><strong>Lokale Verarbeitung:</strong> Alle Daten werden nur auf Ihrem iPhone verarbeitet</li>
                <li><strong>Keine Cloud-Übertragung:</strong> Fotos werden nicht an Server gesendet</li>
                <li><strong>Original bleibt erhalten:</strong> Das Original-Foto wird nicht verändert</li>
                <li><strong>Qualität unverändert:</strong> Bildqualität bleibt vollständig erhalten</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Häufige Fragen zu EXIF-Daten auf dem iPhone
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Kann ich EXIF-Daten für alle Fotos auf einmal entfernen?
                </h3>
                <p className="text-gray-700">
                  Ja, mit unserem Online-Tool können Sie mehrere Fotos gleichzeitig verarbeiten. 
                  Wählen Sie einfach alle gewünschten Fotos aus und laden Sie sie in einem Batch-Vorgang herunter.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Werden EXIF-Daten automatisch entfernt, wenn ich Fotos teile?
                </h3>
                <p className="text-gray-700">
                  Nein, standardmäßig werden EXIF-Daten beim Teilen übertragen. Sie müssen 
                  explizit die "Standort"-Option deaktivieren oder ein Tool wie unseres verwenden.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Sind EXIF-Daten bei Live-Fotos anders?
                </h3>
                <p className="text-gray-700">
                  Live-Fotos enthalten zusätzliche Bewegungsdaten, aber die EXIF-Daten 
                  funktionieren genauso. Unser Tool entfernt alle Metadaten, einschließlich 
                  der Live-Foto-spezifischen Informationen.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fazit: EXIF-Daten iPhone löschen
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Das Entfernen von EXIF-Daten auf dem iPhone ist einfacher als gedacht. 
              Mit unserem kostenlosen Online-Tool können Sie Ihre Privatsphäre in wenigen 
              Sekunden schützen, ohne Apps installieren zu müssen.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Unsere Empfehlung
              </h3>
              <p className="text-blue-800 mb-4">
                Verwenden Sie unser Online-Tool für die beste Kombination aus Einfachheit, 
                Sicherheit und Funktionalität. Es funktioniert direkt in Safari und 
                verarbeitet alle Ihre Fotos lokal auf dem Gerät.
              </p>
              <div className="text-center">
                <Link 
                  href="/#tools" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Jetzt kostenlos testen
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Verwandte Artikel</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/pdf-metadaten-entfernen" className="text-blue-600 hover:text-blue-800 font-medium">
                  → PDF Metadaten entfernen - Komplette Anleitung
                </Link>
                <Link href="/exif-daten-loeschen" className="text-blue-600 hover:text-blue-800 font-medium">
                  → EXIF Daten löschen - Alle Methoden im Vergleich
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
