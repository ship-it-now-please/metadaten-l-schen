import type { Metadata } from 'next'
import Link from 'next/link'
import { Smartphone, FileText, Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Anleitungen & Guides | metadaten-löschen.de',
  description: 'Detaillierte Anleitungen zum Entfernen von Metadaten auf verschiedenen Geräten. iPhone, Android, PDF - alle Guides in einem Überblick.',
  keywords: 'exif daten anleitung, metadaten entfernen guide, pdf metadaten anleitung, iphone exif daten, android metadaten löschen',
  alternates: {
    canonical: 'https://metadaten-löschen.de/blog',
  },
}

const blogPosts = [
  {
    title: 'EXIF Daten iPhone löschen - So einfach geht\'s',
    description: 'Schützen Sie Ihre Privatsphäre auf dem iPhone! Erfahren Sie, wie Sie EXIF-Daten aus Ihren Fotos entfernen und GPS-Koordinaten, Kamera-Informationen und Zeitstempel sicher löschen.',
    href: '/exif-daten-iphone-loeschen',
    icon: Smartphone,
    color: 'blue',
    readTime: '5 Min',
    category: 'iPhone',
    featured: true
  },
  {
    title: 'PDF Metadaten entfernen - Anleitung für Anfänger',
    description: 'Schützen Sie Ihre Privatsphäre in PDF-Dokumenten! Erfahren Sie, wie Sie Autor, Erstellungsdatum und andere sensible Metadaten aus PDFs entfernen - einfach und sicher.',
    href: '/pdf-metadaten-entfernen-anleitung',
    icon: FileText,
    color: 'green',
    readTime: '6 Min',
    category: 'PDF',
    featured: true
  },
  {
    title: 'EXIF Daten Android löschen - Komplette Anleitung',
    description: 'Schützen Sie Ihre Privatsphäre auf Android! Erfahren Sie, wie Sie EXIF-Daten aus Ihren Fotos entfernen und GPS-Koordinaten, Kamera-Informationen und Zeitstempel sicher löschen.',
    href: '/exif-daten-android-loeschen',
    icon: Smartphone,
    color: 'orange',
    readTime: '7 Min',
    category: 'Android',
    featured: true
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    green: 'bg-green-50 border-green-200 text-green-600',
    orange: 'bg-orange-50 border-orange-200 text-orange-600'
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog & Anleitungen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detaillierte Anleitungen zum Entfernen von Metadaten auf verschiedenen Geräten. 
              Schützen Sie Ihre Privatsphäre mit unseren Schritt-für-Schritt Guides.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Alle Anleitungen</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const Icon = post.icon
              return (
                <article key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${getColorClasses(post.color)}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="ml-3">
                        <span className="text-sm font-medium text-gray-500">{post.category}</span>
                        <div className="flex items-center text-sm text-gray-400 mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime} Lesezeit</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <Link 
                      href={post.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
                    >
                      Anleitung lesen
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Sofort loslegen
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Schützen Sie Ihre Privatsphäre noch heute! Nutzen Sie unser kostenloses Tool 
            zum Entfernen von Metadaten aus Bildern und PDFs.
          </p>
          <Link 
            href="/#tools"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Jetzt Metadaten entfernen
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Nach Kategorien</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 ml-3">Mobile Geräte</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Anleitungen für iPhone und Android-Geräte zum Entfernen von EXIF-Daten.
              </p>
              <div className="space-y-2">
                <Link href="/exif-daten-iphone-loeschen" className="block text-blue-600 hover:text-blue-800 text-sm">
                  → EXIF Daten iPhone löschen
                </Link>
                <Link href="/exif-daten-android-loeschen" className="block text-blue-600 hover:text-blue-800 text-sm">
                  → EXIF Daten Android löschen
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-50 rounded-lg text-green-600">
                  <FileText className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 ml-3">Dokumente</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Guides zum Entfernen von Metadaten aus PDF-Dokumenten und anderen Dateiformaten.
              </p>
              <div className="space-y-2">
                <Link href="/pdf-metadaten-entfernen-anleitung" className="block text-blue-600 hover:text-blue-800 text-sm">
                  → PDF Metadaten entfernen
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 ml-3">Alle Artikel</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Übersicht aller verfügbaren Anleitungen und Guides zum Thema Metadaten.
              </p>
              <div className="space-y-2">
                <Link href="/blog" className="block text-blue-600 hover:text-blue-800 text-sm">
                  → Alle Artikel anzeigen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
