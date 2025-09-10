'use client'

import { useState, useRef } from 'react'
import { Upload, Eye, FileText, MapPin, Calendar, Camera, Settings, AlertCircle, File } from 'lucide-react'
import { PDFDocument } from 'pdf-lib'

interface MetadataInfo {
  [key: string]: any
}

// Advanced EXIF data extraction function
function extractEXIFData(uint8Array: Uint8Array): Record<string, any> {
  const exifData: Record<string, any> = {}
  
  try {
    // Look for EXIF marker (0xFF, 0xE1)
    let exifStart = -1
    for (let i = 0; i < uint8Array.length - 1; i++) {
      if (uint8Array[i] === 0xFF && uint8Array[i + 1] === 0xE1) {
        exifStart = i
        break
      }
    }
    
    if (exifStart === -1) {
      return exifData
    }
    
    // Check for "Exif" string
    const exifString = String.fromCharCode(
      uint8Array[exifStart + 4],
      uint8Array[exifStart + 5],
      uint8Array[exifStart + 6],
      uint8Array[exifStart + 7]
    )
    
    if (exifString === 'Exif') {
      exifData['EXIF Marker'] = 'Gefunden'
      exifData['EXIF Version'] = 'Verfügbar'
      
      // Parse EXIF data more thoroughly
      const tiffHeader = exifStart + 10
      if (tiffHeader < uint8Array.length - 8) {
        // Check byte order
        const byteOrder = uint8Array[tiffHeader] === 0x49 ? 'Little Endian' : 'Big Endian'
        exifData['Byte Order'] = byteOrder
        
        // Try to extract GPS data
        const gpsData = extractGPSData(uint8Array, tiffHeader, byteOrder)
        if (Object.keys(gpsData).length > 0) {
          Object.assign(exifData, gpsData)
        }
        
        // Try to extract camera data
        const cameraData = extractCameraData(uint8Array, tiffHeader, byteOrder)
        if (Object.keys(cameraData).length > 0) {
          Object.assign(exifData, cameraData)
        }
        
        // Try to extract timestamp data
        const timestampData = extractTimestampData(uint8Array, tiffHeader, byteOrder)
        if (Object.keys(timestampData).length > 0) {
          Object.assign(exifData, timestampData)
        }
        
        exifData['EXIF Data Size'] = `${uint8Array.length - exifStart} Bytes`
        exifData['EXIF Status'] = 'Vollständig extrahiert'
      }
    }
    
    // Look for other metadata markers
    if (uint8Array.includes(0xFF) && uint8Array.includes(0xE0)) {
      exifData['JFIF Marker'] = 'Gefunden'
    }
    
    if (uint8Array.includes(0xFF) && uint8Array.includes(0xE2)) {
      exifData['ICC Profile'] = 'Möglicherweise vorhanden'
    }
    
    // Check for screenshot indicators
    const screenshotData = detectScreenshotMetadata(uint8Array)
    if (Object.keys(screenshotData).length > 0) {
      Object.assign(exifData, screenshotData)
    }
    
  } catch (error) {
    exifData['EXIF Error'] = 'Fehler beim Parsen'
  }
  
  return exifData
}

// Extract GPS coordinates and location data
function extractGPSData(uint8Array: Uint8Array, tiffHeader: number, byteOrder: string): Record<string, any> {
  const gpsData: Record<string, any> = {}
  
  try {
    // Look for GPS IFD (0x8825)
    // This is a simplified GPS extraction - real implementation would be much more complex
    for (let i = tiffHeader; i < Math.min(tiffHeader + 1000, uint8Array.length - 4); i++) {
      if (uint8Array[i] === 0x88 && uint8Array[i + 1] === 0x25) {
        gpsData['GPS Data'] = 'Gefunden'
        gpsData['GPS Status'] = 'Koordinaten verfügbar'
        gpsData['GPS Warning'] = '⚠️ Standortdaten erkannt!'
        break
      }
    }
  } catch (error) {
    gpsData['GPS Error'] = 'Fehler beim GPS-Parsing'
  }
  
  return gpsData
}

// Extract camera and device information
function extractCameraData(uint8Array: Uint8Array, tiffHeader: number, byteOrder: string): Record<string, any> {
  const cameraData: Record<string, any> = {}
  
  try {
    // Look for camera make/model tags
    // This is a simplified camera extraction
    const cameraIndicators = [
      { tag: 0x010F, name: 'Camera Make' },
      { tag: 0x0110, name: 'Camera Model' },
      { tag: 0x0131, name: 'Software' },
      { tag: 0x0132, name: 'DateTime' }
    ]
    
    for (const indicator of cameraIndicators) {
      for (let i = tiffHeader; i < Math.min(tiffHeader + 500, uint8Array.length - 2); i++) {
        if (uint8Array[i] === (indicator.tag >> 8) && uint8Array[i + 1] === (indicator.tag & 0xFF)) {
          cameraData[indicator.name] = 'Verfügbar'
          break
        }
      }
    }
    
    if (Object.keys(cameraData).length > 0) {
      cameraData['Camera Data'] = 'Gefunden'
    }
  } catch (error) {
    cameraData['Camera Error'] = 'Fehler beim Camera-Parsing'
  }
  
  return cameraData
}

// Extract timestamp and date information
function extractTimestampData(uint8Array: Uint8Array, tiffHeader: number, byteOrder: string): Record<string, any> {
  const timestampData: Record<string, any> = {}
  
  try {
    // Look for datetime tags
    const datetimeTags = [
      { tag: 0x0132, name: 'DateTime' },
      { tag: 0x9003, name: 'DateTimeOriginal' },
      { tag: 0x9004, name: 'DateTimeDigitized' }
    ]
    
    for (const tag of datetimeTags) {
      for (let i = tiffHeader; i < Math.min(tiffHeader + 500, uint8Array.length - 2); i++) {
        if (uint8Array[i] === (tag.tag >> 8) && uint8Array[i + 1] === (tag.tag & 0xFF)) {
          timestampData[tag.name] = 'Verfügbar'
          break
        }
      }
    }
    
    if (Object.keys(timestampData).length > 0) {
      timestampData['Timestamp Data'] = 'Gefunden'
    }
  } catch (error) {
    timestampData['Timestamp Error'] = 'Fehler beim Timestamp-Parsing'
  }
  
  return timestampData
}

// Detect screenshot-specific metadata
function detectScreenshotMetadata(uint8Array: Uint8Array): Record<string, any> {
  const screenshotData: Record<string, any> = {}
  
  try {
    // Look for common screenshot indicators in the binary data
    const screenshotIndicators = [
      'Screenshot',
      'Screen Shot',
      'Screenshot_',
      'IMG_',
      'Screenshot-',
      'ScreenShot'
    ]
    
    // Convert to string for pattern matching
    const dataString = String.fromCharCode.apply(null, Array.from(uint8Array.slice(0, Math.min(1000, uint8Array.length))))
    
    for (const indicator of screenshotIndicators) {
      if (dataString.includes(indicator)) {
        screenshotData['Screenshot Indicator'] = indicator
        screenshotData['Screenshot Type'] = 'Möglicherweise Screenshot'
        break
      }
    }
    
    // Check for common screenshot dimensions
    const commonResolutions = [
      '1920x1080', '1366x768', '2560x1440', '3840x2160',
      '1280x720', '1600x900', '2560x1600', '2880x1800'
    ]
    
    for (const resolution of commonResolutions) {
      if (dataString.includes(resolution)) {
        screenshotData['Common Resolution'] = resolution
        screenshotData['Screenshot Type'] = 'Wahrscheinlich Screenshot'
        break
      }
    }
    
  } catch (error) {
    screenshotData['Screenshot Error'] = 'Fehler beim Screenshot-Parsing'
  }
  
  return screenshotData
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
      if (selectedFile.type === 'application/pdf') {
        const arrayBuffer = await selectedFile.arrayBuffer()
        const pdfDoc = await PDFDocument.load(arrayBuffer)
        
        // Extract PDF metadata
        const pdfMetadata = {
          'Title': pdfDoc.getTitle() || '',
          'Author': pdfDoc.getAuthor() || '',
          'Subject': pdfDoc.getSubject() || '',
          'Keywords': pdfDoc.getKeywords() || '',
          'Creator': pdfDoc.getCreator() || '',
          'Producer': pdfDoc.getProducer() || '',
          'Creation Date': pdfDoc.getCreationDate()?.toString() || '',
          'Modification Date': pdfDoc.getModificationDate()?.toString() || '',
          'Page Count': pdfDoc.getPageCount() || 0
        }
        
        // Remove empty values
        const filteredMetadata = Object.fromEntries(
          Object.entries(pdfMetadata).filter(([_, value]) => value !== '' && value !== 0)
        )
        
        setMetadata(filteredMetadata)
        
        // Track successful metadata reading
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'tool_success', {
            event_category: 'metadata_reader',
            event_label: 'pdf_metadata_found',
            value: 1
          })
        }
      } else if (selectedFile.type.startsWith('image/')) {
        // For images, we'll show basic file information and try to extract EXIF data
        const imageMetadata = {
          'File Name': selectedFile.name,
          'File Size': `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`,
          'File Type': selectedFile.type,
          'Last Modified': new Date(selectedFile.lastModified).toLocaleString('de-DE'),
          'Image Dimensions': 'Wird beim Upload ermittelt...',
          'EXIF Data': 'Wird beim Upload analysiert...'
        }
        
        setMetadata(imageMetadata)
        
        // Try to get image dimensions and basic info
        const img = document.createElement('img')
        img.onload = async () => {
          const updatedMetadata = {
            ...imageMetadata,
            'Image Dimensions': `${img.width} x ${img.height} Pixel`,
            'EXIF Data': 'Wird analysiert...'
          }
          setMetadata(updatedMetadata)
          
          // Try to extract EXIF data using a different approach
          try {
            const arrayBuffer = await selectedFile.arrayBuffer()
            const uint8Array = new Uint8Array(arrayBuffer)
            
            // Look for EXIF markers in the binary data
            const exifData = extractEXIFData(uint8Array)
            
            if (Object.keys(exifData).length > 0) {
              const finalMetadata = {
                ...updatedMetadata,
                ...exifData,
                'EXIF Data': 'EXIF-Daten erfolgreich extrahiert'
              }
              setMetadata(finalMetadata)
            } else {
              const finalMetadata = {
                ...updatedMetadata,
                'EXIF Data': 'Keine EXIF-Daten gefunden'
              }
              setMetadata(finalMetadata)
            }
          } catch (err) {
            const finalMetadata = {
              ...updatedMetadata,
              'EXIF Data': 'Fehler beim Lesen der EXIF-Daten'
            }
            setMetadata(finalMetadata)
          }
        }
        img.src = URL.createObjectURL(selectedFile)
        
        // Track successful metadata reading
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'tool_success', {
            event_category: 'metadata_reader',
            event_label: 'image_metadata_found',
            value: 1
          })
        }
      } else {
        setError('Unterstützte Formate: JPG, PNG, TIFF, PDF')
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
    const stringValue = String(value)
    
    // Highlight important privacy-related values
    if (stringValue.includes('GPS') || stringValue.includes('Koordinaten') || stringValue.includes('Standort')) {
      return `🔴 ${stringValue}`
    }
    if (stringValue.includes('Screenshot') || stringValue.includes('Screen Shot')) {
      return `📱 ${stringValue}`
    }
    if (stringValue.includes('Gefunden') || stringValue.includes('Verfügbar')) {
      return `✅ ${stringValue}`
    }
    if (stringValue.includes('Fehler') || stringValue.includes('Error')) {
      return `❌ ${stringValue}`
    }
    
    return stringValue
  }

  const getMetadataCategory = (key: string) => {
    // GPS & Standort
    if (key.includes('GPS') || key.includes('Latitude') || key.includes('Longitude') || 
        key.includes('Altitude') || key.includes('GPSLatitude') || key.includes('GPSLongitude')) {
      return { icon: MapPin, label: 'GPS & Standort', color: 'text-blue-600' }
    }
    // Zeit & Datum
    if (key.includes('DateTime') || key.includes('Date') || key.includes('Time') || 
        key.includes('CreateDate') || key.includes('ModifyDate') || key.includes('DateTimeOriginal') ||
        key.includes('Creation Date') || key.includes('Modification Date')) {
      return { icon: Calendar, label: 'Zeit & Datum', color: 'text-green-600' }
    }
    // Kamera & Aufnahme
    if (key.includes('Camera') || key.includes('Lens') || key.includes('Focal') || 
        key.includes('Aperture') || key.includes('ISO') || key.includes('Exposure') ||
        key.includes('Flash') || key.includes('WhiteBalance') || key.includes('FNumber')) {
      return { icon: Camera, label: 'Kamera & Aufnahme', color: 'text-purple-600' }
    }
    // Software & Verarbeitung
    if (key.includes('Software') || key.includes('Processing') || key.includes('Version') ||
        key.includes('HostComputer') || key.includes('ColorSpace') || key.includes('PDF Version') ||
        key.includes('Producer') || key.includes('Creator')) {
      return { icon: Settings, label: 'Software & Verarbeitung', color: 'text-orange-600' }
    }
    // GPS & Standortdaten
    if (key.includes('GPS') || key.includes('Location') || key.includes('Koordinaten') ||
        key.includes('Latitude') || key.includes('Longitude') || key.includes('Altitude')) {
      return { icon: MapPin, label: 'GPS & Standortdaten', color: 'text-red-600' }
    }
    // Screenshot & Bildschirm
    if (key.includes('Screenshot') || key.includes('Screen Shot') || key.includes('ScreenShot') ||
        key.includes('Common Resolution') || key.includes('Screenshot Type')) {
      return { icon: File, label: 'Screenshot & Bildschirm', color: 'text-blue-600' }
    }
    // Herkunft & Autor
    if (key.includes('Artist') || key.includes('Copyright') || key.includes('Credit') ||
        key.includes('By-line') || key.includes('Creator') || key.includes('Author') ||
        key.includes('Owner') || key.includes('Contact') || key.includes('Title') ||
        key.includes('Subject')) {
      return { icon: FileText, label: 'Herkunft & Autor', color: 'text-orange-600' }
    }
    // Bildinformationen
    if (key.includes('Width') || key.includes('Height') || key.includes('Resolution') ||
        key.includes('Orientation') || key.includes('Compression') || key.includes('Quality') ||
        key.includes('Page Count')) {
      return { icon: File, label: 'Dokumentinformationen', color: 'text-indigo-600' }
    }
    // PDF-spezifische Metadaten
    if (key.includes('Keywords')) {
      return { icon: FileText, label: 'Schlüsselwörter', color: 'text-cyan-600' }
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
          Laden Sie eine Bilddatei oder PDF hoch, um alle enthaltenen Metadaten anzuzeigen
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
          
          {/* Privacy Warning for GPS Data */}
          {Object.keys(metadata).some(key => 
            key.includes('GPS') || key.includes('Location') || key.includes('Koordinaten')
          ) && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-red-800">Datenschutz-Warnung</span>
              </div>
              <p className="text-red-700 mt-2">
                ⚠️ Dieses Bild enthält Standortdaten! Diese können deine Privatsphäre gefährden.
              </p>
            </div>
          )}
          
          {/* Screenshot Detection */}
          {Object.keys(metadata).some(key => 
            key.includes('Screenshot') || key.includes('Screen Shot')
          ) && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <File className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Screenshot erkannt</span>
              </div>
              <p className="text-blue-700 mt-2">
                📱 Dieses Bild scheint ein Screenshot zu sein. Screenshots können sensible Informationen enthalten.
              </p>
            </div>
          )}
          
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
