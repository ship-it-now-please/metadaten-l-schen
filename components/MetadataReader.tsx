'use client'

import { useState, useRef } from 'react'
import { Upload, Eye, FileText, MapPin, Calendar, Camera, Settings, AlertCircle } from 'lucide-react'
import { parse } from 'exifr'

interface MetadataInfo {
  [key: string]: any
}

export function MetadataReader() {
  const [file, setFile] = useState<File | null>(null)
  const [metadata, setMetadata] = useState<MetadataInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile)
    setError(null)
    setLoading(true)

    // Track tool usage
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'tool_usage', {
        event_category: 'metadata_reader',
        event_label: 'file_upload',
        value: 1
      })
    }

    try {
      if (selectedFile.type.startsWith('image/')) {
        const exifData = await parse(selectedFile)
        setMetadata(exifData || {})
        
        // Track successful metadata reading
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'tool_success', {
            event_category: 'metadata_reader',
            event_label: 'metadata_found',
            value: 1
          })
        }
      } else {
        setError('Nur Bilddateien werden für die Metadaten-Anzeige unterstützt.')
        // Track unsupported file type
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'tool_error', {
            event_category: 'metadata_reader',
            event_label: 'unsupported_file_type',
            value: 1
          })
        }
      }
    } catch (err) {
      setError('Fehler beim Lesen der Metadaten. Bitte versuchen Sie es mit einer anderen Datei.')
      // Track error
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'tool_error', {
          event_category: 'metadata_reader',
          event_label: 'read_error',
          value: 1
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileSelect(droppedFile)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const formatValue = (value: any): string => {
    if (Array.isArray(value)) {
      return value.join(', ')
    }
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value)
    }
    return String(value)
  }

  const getMetadataCategory = (key: string) => {
    if (key.includes('GPS') || key.includes('Latitude') || key.includes('Longitude')) {
      return { icon: MapPin, label: 'GPS & Standort', color: 'text-blue-600' }
    }
    if (key.includes('DateTime') || key.includes('Date') || key.includes('Time')) {
      return { icon: Calendar, label: 'Zeit & Datum', color: 'text-green-600' }
    }
    if (key.includes('Camera') || key.includes('Lens') || key.includes('Focal') || key.includes('Aperture') || key.includes('ISO')) {
      return { icon: Camera, label: 'Kamera & Aufnahme', color: 'text-purple-600' }
    }
    if (key.includes('Software') || key.includes('Processing') || key.includes('Version')) {
      return { icon: Settings, label: 'Software & Verarbeitung', color: 'text-orange-600' }
    }
    return { icon: FileText, label: 'Allgemein', color: 'text-gray-600' }
  }

  const groupedMetadata = metadata ? Object.entries(metadata).reduce((acc, [key, value]) => {
    const category = getMetadataCategory(key)
    if (!acc[category.label]) {
      acc[category.label] = { items: [], icon: category.icon, color: category.color }
    }
    acc[category.label].items.push({ key, value })
    return acc
  }, {} as Record<string, { items: Array<{ key: string; value: any }>, icon: any, color: string }>) : {}

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Metadaten anzeigen
        </h2>
        <p className="text-lg text-gray-600">
          Laden Sie eine Bilddatei hoch, um alle enthaltenen Metadaten/EXIF-Daten anzuzeigen
        </p>
      </div>

      {/* File Upload Area */}
      <div
        className={`upload-area ${file ? 'border-green-500 bg-green-50' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
          className="hidden"
        />
        
        {!file ? (
          <div className="text-center">
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-medium text-gray-600 mb-2">
              Datei hier ablegen oder klicken zum Auswählen
            </p>
            <p className="text-sm text-gray-500">
              Unterstützte Formate: JPG, PNG, TIFF
            </p>
          </div>
        ) : (
          <div className="text-center">
            <Eye className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <p className="text-lg font-medium text-gray-900 mb-2">
              {file.name}
            </p>
            <p className="text-sm text-gray-600">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Metadaten werden gelesen...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <p className="text-red-800">{error}</p>
          </div>
        </div>
      )}

      {/* Metadata Display */}
      {metadata && Object.keys(metadata).length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Gefundene Metadaten:
          </h3>
          
          <div className="space-y-6">
            {Object.entries(groupedMetadata).map(([category, { items, icon: Icon, color }]) => (
              <div key={category} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Icon className={`w-5 h-5 mr-2 ${color}`} />
                  <h4 className="text-lg font-medium text-gray-900">{category}</h4>
                </div>
                <div className="grid gap-3">
                  {items.map(({ key, value }) => (
                    <div key={key} className="flex justify-between items-start py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-700 flex-1">{key}:</span>
                      <span className="text-gray-600 text-right flex-1 ml-4 break-all">
                        {formatValue(value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Metadata Found */}
      {metadata && Object.keys(metadata).length === 0 && (
        <div className="text-center py-8">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg text-gray-600 mb-2">Keine Metadaten gefunden</p>
          <p className="text-sm text-gray-500">
            Diese Datei enthält keine EXIF-Daten oder Metadaten.
          </p>
        </div>
      )}

      {/* Reset Button */}
      {file && (
        <div className="text-center mt-8">
          <button
            onClick={() => {
              setFile(null)
              setMetadata(null)
              setError(null)
            }}
            className="btn-secondary"
          >
            Neue Datei auswählen
          </button>
        </div>
      )}
    </div>
  )
}
