'use client'

import { useState, useRef } from 'react'
import { Upload, Download, Eye, Trash2, FileText, Image, File, AlertCircle, CheckCircle, Shield, Lock, Zap, Star, Users, Clock, Smartphone, Camera, MapPin, Calendar, Settings } from 'lucide-react'
import { MetadataReader } from '@/components/MetadataReader'
import { MetadataRemover } from '@/components/MetadataRemover'
import { CookieBanner } from '@/components/CookieBanner'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'read' | 'remove'>('read')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                metadaten-löschen.de
              </h1>
            </div>
                        <nav className="hidden md:flex space-x-8">
                          <a href="#tools" className="text-gray-600 hover:text-gray-900 font-medium">EXIF Tools</a>
                          <a href="/pdf-metadaten-entfernen" className="text-gray-600 hover:text-gray-900 font-medium">PDF Metadaten</a>
                          <a href="/exif-daten-loeschen" className="text-gray-600 hover:text-gray-900 font-medium">EXIF löschen</a>
                          <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium">FAQ</a>
                        </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Optimized for Primary Keywords */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block">EXIF Daten löschen</span>
            <span className="block text-3xl md:text-5xl mt-2 text-blue-200">& Metadaten entfernen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
            <strong>Kostenloses Online-Tool</strong> zum <strong>EXIF Daten auslesen</strong> und <strong>Metadaten aus Bildern entfernen</strong>. 
            Schützen Sie Ihre Privatsphäre mit unserem <strong>EXIF Daten Löscher</strong> für JPG, PNG, PDF und mehr.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="font-semibold">100% kostenlos</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Shield className="w-6 h-6 text-blue-300" />
              <span className="font-semibold">Datenschutz garantiert</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold">Sofort verfügbar</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Lock className="w-6 h-6 text-red-300" />
              <span className="font-semibold">Lokale Verarbeitung</span>
            </div>
          </div>
          
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="#tools"
                          onClick={() => setActiveTab('remove')}
                          className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg text-center"
                        >
                          <Trash2 className="w-6 h-6 inline mr-2" />
                          Jetzt EXIF Daten löschen
                        </a>
                        <a
                          href="#tools"
                          onClick={() => setActiveTab('read')}
                          className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-colors shadow-lg text-center"
                        >
                          <Eye className="w-6 h-6 inline mr-2" />
                          Metadaten anzeigen
                        </a>
                      </div>
        </div>
      </section>

      {/* Main Tools Section */}
      <section id="tools" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              EXIF Daten Online Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unser <strong>EXIF Daten auslesen Tool</strong> und <strong>Metadaten entfernen Tool</strong> 
              hilft Ihnen dabei, Ihre Privatsphäre zu schützen und sensible Daten aus Ihren Dateien zu entfernen.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-xl shadow-lg border">
              <button
                onClick={() => setActiveTab('read')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'read' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Eye className="w-6 h-6 inline mr-3" />
                EXIF Daten anzeigen
              </button>
              <button
                onClick={() => setActiveTab('remove')}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'remove' 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <Trash2 className="w-6 h-6 inline mr-3" />
                EXIF Daten löschen
              </button>
            </div>
          </div>

          {/* Tool Content */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {activeTab === 'read' ? <MetadataReader /> : <MetadataRemover />}
          </div>
        </div>
      </section>

      {/* What are EXIF Data Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Was sind EXIF Daten? - Alles was Sie wissen müssen
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>EXIF Daten</strong> (Exchangeable Image File Format) sind versteckte Metadaten in digitalen Bildern, 
              die detaillierte Informationen über die Aufnahme enthalten. Diese <strong>EXIF Metadaten</strong> können 
              Ihre Privatsphäre gefährden und sensible Informationen preisgeben.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Welche EXIF Daten werden gespeichert?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Camera className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kamera-Informationen</h4>
                    <p className="text-gray-600">Marke, Modell, Seriennummer, Objektiv-Details</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">GPS-Koordinaten</h4>
                    <p className="text-gray-600">Exakter Aufnahmeort mit Längen- und Breitengrad</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Zeitstempel</h4>
                    <p className="text-gray-600">Aufnahmedatum, -zeit und Zeitzone</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Settings className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kameraeinstellungen</h4>
                    <p className="text-gray-600">ISO, Blende, Verschlusszeit, Brennweite</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Privatsphäre-Risiken</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Standort-Tracking:</strong> Jeder kann sehen, wo Sie das Foto gemacht haben</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Zeitstempel:</strong> Verrät wann Sie sich wo aufgehalten haben</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Geräte-Identifikation:</strong> Eindeutige Identifizierung Ihrer Kamera</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Soziale Medien:</strong> Automatische Veröffentlichung von Standortdaten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remove EXIF Data Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Warum sollten Sie EXIF Daten löschen?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Das <strong>Löschen von EXIF Daten</strong> ist essentiell für den Schutz Ihrer Privatsphäre. 
              Erfahren Sie, warum das <strong>Entfernen von Metadaten</strong> so wichtig ist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Privatsphäre schützen</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>EXIF Daten entfernen</strong> verhindert, dass Ihr Standort, Aufnahmezeit und 
                Kamera-Informationen an Dritte weitergegeben werden.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sichere Weitergabe</h3>
              <p className="text-gray-600 leading-relaxed">
                Beim Teilen von Fotos werden keine sensiblen <strong>Metadaten aus Bildern</strong> 
                preisgegeben, die Ihre Identität verraten könnten.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Schnell & Einfach</h3>
              <p className="text-gray-600 leading-relaxed">
                Unser <strong>EXIF Daten Löscher</strong> entfernt alle Metadaten in Sekunden 
                ohne Qualitätsverlust der Bilder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section id="formats" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Unterstützte Dateiformate - EXIF Daten auslesen & löschen
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Unser <strong>EXIF Daten Tool</strong> unterstützt alle gängigen Bildformate und 
              <strong>PDF Metadaten entfernen</strong> für maximale Kompatibilität.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center shadow-lg">
              <Image className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h3 className="text-xl font-bold mb-3">Bildformate</h3>
              <p className="text-gray-600 mb-4"><strong>JPG, JPEG, PNG, TIFF</strong></p>
              <p className="text-sm text-gray-500">EXIF Daten auslesen und entfernen</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl text-center shadow-lg">
              <FileText className="w-16 h-16 mx-auto mb-6 text-red-600" />
              <h3 className="text-xl font-bold mb-3">PDF Dokumente</h3>
              <p className="text-gray-600 mb-4"><strong>Alle PDF-Versionen</strong></p>
              <p className="text-sm text-gray-500">PDF Metadaten entfernen</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center shadow-lg">
              <File className="w-16 h-16 mx-auto mb-6 text-green-600" />
              <h3 className="text-xl font-bold mb-3">Videos</h3>
              <p className="text-gray-600 mb-4"><strong>MP4, MOV, AVI</strong></p>
              <p className="text-sm text-gray-500">Video Metadaten bearbeiten</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center shadow-lg">
              <FileText className="w-16 h-16 mx-auto mb-6 text-purple-600" />
              <h3 className="text-xl font-bold mb-3">Dokumente</h3>
              <p className="text-gray-600 mb-4"><strong>DOCX, XLSX, PPTX</strong></p>
              <p className="text-sm text-gray-500">Office Metadaten entfernen</p>
            </div>
          </div>

          {/* Detailed Format Information */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Detaillierte Format-Unterstützung
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-600">Bildformate</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>JPEG/JPG:</strong> Vollständige EXIF Daten Unterstützung</li>
                  <li>• <strong>PNG:</strong> Metadaten aus PNG Dateien entfernen</li>
                  <li>• <strong>TIFF:</strong> EXIF Daten aus TIFF Bildern löschen</li>
                  <li>• <strong>RAW Formate:</strong> Kamera-spezifische Metadaten</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-red-600">Dokumente</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>PDF:</strong> Autor, Erstellungsdatum, Software-Info</li>
                  <li>• <strong>Word:</strong> Dokumenteigenschaften entfernen</li>
                  <li>• <strong>Excel:</strong> Arbeitsmappen-Metadaten löschen</li>
                  <li>• <strong>PowerPoint:</strong> Präsentations-Daten entfernen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Häufig gestellte Fragen zu EXIF Daten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles was Sie über <strong>EXIF Daten auslesen</strong>, <strong>Metadaten entfernen</strong> 
              und unser <strong>EXIF Daten Tool</strong> wissen müssen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Was sind EXIF Daten?</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>EXIF Daten</strong> (Exchangeable Image File Format) sind versteckte Metadaten in digitalen Bildern, 
                  die detaillierte Informationen über die Aufnahme enthalten. Dazu gehören Kamera-Informationen, 
                  GPS-Koordinaten, Zeitstempel und Kameraeinstellungen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-red-600">Warum sollte ich EXIF Daten löschen?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Das <strong>Löschen von EXIF Daten</strong> schützt Ihre Privatsphäre, da diese Metadaten 
                  Ihren Standort, Aufnahmezeit und sogar Ihre Kamera-Seriennummer preisgeben können. 
                  Besonders beim Teilen in sozialen Medien ist das <strong>Entfernen von Metadaten</strong> wichtig.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-green-600">Sind meine Dateien sicher?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, alle Dateien werden <strong>nur in Ihrem Browser</strong> verarbeitet. Sie werden 
                  nicht an unsere Server übertragen oder gespeichert. Die Verarbeitung erfolgt 
                  <strong>100% lokal</strong> für maximalen Datenschutz.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Funktioniert das Tool kostenlos?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ja, unser <strong>EXIF Daten Tool</strong> ist <strong>vollständig kostenlos</strong> 
                  und erfordert keine Anmeldung oder Registrierung. Sie können sofort mit dem 
                  <strong>EXIF Daten auslesen</strong> und <strong>Metadaten entfernen</strong> beginnen.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Welche Metadaten werden entfernt?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Unser <strong>EXIF Daten Löscher</strong> entfernt alle EXIF-Daten, GPS-Koordinaten, 
                  Kamera-Informationen, Erstellungsdaten, Autor-Informationen und andere sensible 
                  Metadaten aus Ihren Dateien.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-indigo-600">Welche Dateiformate werden unterstützt?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wir unterstützen <strong>JPG, PNG, TIFF</strong> für Bilder, <strong>PDF</strong> für Dokumente, 
                  und <strong>MP4, MOV, AVI</strong> für Videos. Unser Tool kann <strong>Metadaten aus Bildern entfernen</strong> 
                  und <strong>PDF Metadaten entfernen</strong>.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-pink-600">Wie funktioniert das EXIF Daten auslesen?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Laden Sie einfach Ihre Datei hoch und unser Tool zeigt Ihnen alle enthaltenen 
                  <strong>EXIF Metadaten</strong> an. Sie können dann entscheiden, welche Daten 
                  Sie entfernen möchten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-teal-600">Wird die Bildqualität beeinträchtigt?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nein, das <strong>Entfernen von Metadaten</strong> beeinträchtigt die Bildqualität 
                  nicht. Nur die versteckten EXIF-Daten werden entfernt, die sichtbaren Bilddaten 
                  bleiben unverändert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Über unser EXIF Daten Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Wir entwickeln <strong>kostenlose Online-Tools</strong> zum Schutz Ihrer Privatsphäre. 
              Unser <strong>EXIF Daten auslesen Tool</strong> hilft Ihnen dabei, sensible Metadaten 
              sicher zu entfernen.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Für alle Nutzer</h3>
              <p className="text-gray-600">
                Unser <strong>EXIF Daten Tool</strong> ist für jeden geeignet - von Fotografen 
                bis hin zu Privatpersonen, die ihre Privatsphäre schützen möchten.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Immer verfügbar</h3>
              <p className="text-gray-600">
                Unser <strong>Metadaten entfernen Tool</strong> ist 24/7 online verfügbar. 
                Keine Installation, keine Wartezeiten - sofort einsatzbereit.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Höchste Qualität</h3>
              <p className="text-gray-600">
                Wir verwenden modernste Technologien für das <strong>EXIF Daten auslesen</strong> 
                und <strong>Metadaten entfernen</strong> ohne Qualitätsverlust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ins className="adsbygoogle"
                 style={{display: 'block'}}
                 data-ad-client="ca-pub-7123559671201562"
                 data-ad-slot="1234567890"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">metadaten-löschen.de</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Das führende <strong>kostenlose Online-Tool</strong> zum <strong>EXIF Daten löschen</strong> 
                und <strong>Metadaten entfernen</strong>. Schützen Sie Ihre Privatsphäre mit unserem 
                <strong>EXIF Daten Tool</strong>.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold">100% Kostenlos</span>
                </div>
                <div className="bg-green-600 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold">Lokale Verarbeitung</span>
                </div>
                <div className="bg-purple-600 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold">Keine Anmeldung</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">EXIF Tools</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#tools" className="hover:text-white transition-colors">EXIF Daten anzeigen</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">EXIF Daten löschen</a></li>
                <li><a href="#formats" className="hover:text-white transition-colors">Unterstützte Formate</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
                <li><a href="/kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 metadaten-löschen.de. Alle Rechte vorbehalten.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">EXIF Daten Tool</span>
                <span className="text-gray-400 text-sm">Metadaten entfernen</span>
                <span className="text-gray-400 text-sm">Privatsphäre schützen</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  )
}
