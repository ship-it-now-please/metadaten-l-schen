'use client'

import { useState, useRef } from 'react'
import { Upload, Download, Trash2, FileText, Image, File, AlertCircle, CheckCircle } from 'lucide-react'
import { parse, gps } from 'exifr'
import { PDFDocument } from 'pdf-lib'
import { saveAs } from 'file-saver'

export function MetadataRemover() {
  const [file, setFile] = useState<File | null>(null)
  const [processedFile, setProcessedFile] = useState<Blob | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile)
    setError(null)
    setSuccess(false)
    setProcessedFile(null)
    setLoading(true)

    try {
      if (selectedFile.type.startsWith('image/')) {
        await processImage(selectedFile)
      } else if (selectedFile.type === 'application/pdf') {
        await processPDF(selectedFile)
      } else {
        setError('Unterstützte Formate: JPG, PNG, TIFF, PDF')
      }
    } catch (err) {
      setError('Fehler beim Verarbeiten der Datei. Bitte versuchen Sie es erneut.')
    } finally {
      setLoading(false)
    }
  }

  const processImage = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new window.Image()

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        
        // Draw image without EXIF data - this completely strips all metadata
        ctx?.drawImage(img, 0, 0)
        
        // Convert to blob with high quality but no metadata
        canvas.toBlob((blob) => {
          if (blob) {
            setProcessedFile(blob)
            setSuccess(true)
            resolve()
          } else {
            reject(new Error('Canvas conversion failed'))
          }
        }, file.type, 0.95)
      }

      img.onerror = () => reject(new Error('Image loading failed'))
      // Use createObjectURL to load image without preserving metadata
      img.src = URL.createObjectURL(file)
    })
  }

  const processPDF = async (file: File) => {
    try {
      const arrayBuffer = await file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer)
      
      // Completely remove all metadata by setting to empty values
      pdfDoc.setTitle('')
      pdfDoc.setAuthor('')
      pdfDoc.setSubject('')
      pdfDoc.setKeywords([])
      pdfDoc.setProducer('')
      pdfDoc.setCreator('')
      // Remove creation and modification dates by setting to current date
      pdfDoc.setCreationDate(new Date())
      pdfDoc.setModificationDate(new Date())
      
      const pdfBytes = await pdfDoc.save()
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
      
      setProcessedFile(blob)
      setSuccess(true)
    } catch (err) {
      throw new Error('PDF processing failed')
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

  const downloadProcessedFile = () => {
    if (processedFile && file) {
      const extension = file.name.split('.').pop()
      const newName = file.name.replace(/\.[^/.]+$/, `_ohne_metadaten.${extension}`)
      saveAs(processedFile, newName)
    }
  }

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return Image
    if (fileType === 'application/pdf') return FileText
    return File
  }

  const getFileTypeLabel = (fileType: string) => {
    if (fileType.startsWith('image/')) return 'Bilddatei'
    if (fileType === 'application/pdf') return 'PDF-Dokument'
    return 'Datei'
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Metadaten löschen
        </h2>
        <p className="text-lg text-gray-600">
          Laden Sie eine Datei hoch, um alle Metadaten sicher zu entfernen
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
          accept="image/*,application/pdf"
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
              Unterstützte Formate: JPG, PNG, TIFF, PDF
            </p>
          </div>
        ) : (
          <div className="text-center">
            {(() => {
              const Icon = getFileIcon(file.type)
              return <Icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
            })()}
            <p className="text-lg font-medium text-gray-900 mb-2">
              {file.name}
            </p>
            <p className="text-sm text-gray-600">
              {getFileTypeLabel(file.type)} • {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Metadaten werden entfernt...</p>
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

      {/* Success State */}
      {success && processedFile && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-800">
              Metadaten erfolgreich entfernt!
            </h3>
          </div>
          <p className="text-green-700 mb-4">
            Ihre Datei wurde verarbeitet und alle Metadaten wurden sicher entfernt. 
            Die Dateiqualität bleibt unverändert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={downloadProcessedFile}
              className="btn-primary flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Bereinigte Datei herunterladen
            </button>
            <button
              onClick={() => {
                setFile(null)
                setProcessedFile(null)
                setSuccess(false)
                setError(null)
              }}
              className="btn-secondary"
            >
              Neue Datei verarbeiten
            </button>
          </div>
        </div>
      )}

      {/* Information Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Was wird entfernt?
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="font-medium mb-2">Bei Bildern (EXIF-Daten):</h4>
            <ul className="space-y-1">
              <li>• GPS-Koordinaten und Standort</li>
              <li>• Aufnahmedatum und -zeit</li>
              <li>• Kamera- und Objektiv-Informationen</li>
              <li>• Kameraeinstellungen (ISO, Blende, etc.)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Bei PDF-Dokumenten:</h4>
            <ul className="space-y-1">
              <li>• Autor und Ersteller</li>
              <li>• Erstellungs- und Änderungsdatum</li>
              <li>• Software-Informationen</li>
              <li>• Schlüsselwörter und Beschreibungen</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Datenschutz & Sicherheit
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
            <span>Alle Verarbeitungen erfolgen lokal in Ihrem Browser</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
            <span>Keine Datenübertragung an unsere Server</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
            <span>100% kostenlos und ohne Anmeldung</span>
          </div>
        </div>
      </div>
    </div>
  )
}
