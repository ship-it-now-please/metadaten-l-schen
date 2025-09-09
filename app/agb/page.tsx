import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB - Allgemeine Geschäftsbedingungen | metadaten-löschen.de',
  description: 'Allgemeine Geschäftsbedingungen für das kostenlose EXIF Daten Tool metadaten-löschen.de',
  robots: {
    index: false,
    follow: true,
  },
}

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung des kostenlosen Online-Tools 
              "metadaten-löschen.de" (nachfolgend "Service" oder "Tool"). Der Service wird von Daniel Gaschka 
              (nachfolgend "Anbieter") betrieben.
            </p>

            <h2>§ 2 Beschreibung des Services</h2>
            <p>
              Der Service bietet kostenlose Online-Tools zur:
            </p>
            <ul>
              <li>Anzeige von EXIF-Daten und Metadaten aus Bildern und PDF-Dokumenten</li>
              <li>Entfernung von EXIF-Daten und Metadaten aus Bildern und PDF-Dokumenten</li>
              <li>Schutz der Privatsphäre durch lokale Verarbeitung der Dateien</li>
            </ul>

            <h2>§ 3 Kostenlose Nutzung</h2>
            <p>
              Der Service wird vollständig kostenlos angeboten. Es fallen keine Gebühren oder Kosten für die 
              Nutzung der Tools an. Der Anbieter behält sich das Recht vor, den Service jederzeit zu ändern 
              oder einzustellen.
            </p>

            <h2>§ 4 Datenschutz und Datensicherheit</h2>
            <p>
              Die Verarbeitung der hochgeladenen Dateien erfolgt ausschließlich lokal im Browser des Nutzers. 
              Es werden keine Dateien an die Server des Anbieters übertragen oder dort gespeichert. 
              Weitere Details finden Sie in unserer Datenschutzerklärung.
            </p>

            <h2>§ 5 Haftungsausschluss</h2>
            <p>
              Der Anbieter übernimmt keine Gewähr für die Vollständigkeit, Richtigkeit oder Verfügbarkeit 
              des Services. Die Nutzung erfolgt auf eigene Gefahr. Der Anbieter haftet nicht für:
            </p>
            <ul>
              <li>Schäden durch die Nutzung des Services</li>
              <li>Verlust von Daten oder Dateien</li>
              <li>Unterbrechungen oder Ausfälle des Services</li>
              <li>Schäden durch Dritte oder technische Probleme</li>
            </ul>

            <h2>§ 6 Unterstützte Dateiformate</h2>
            <p>
              Der Service unterstützt folgende Dateiformate:
            </p>
            <ul>
              <li>Bilder: JPG, PNG, TIFF</li>
              <li>Dokumente: PDF</li>
              <li>Videos: MP4, MOV, AVI (nur Anzeige von Metadaten)</li>
            </ul>
            <p>
              Der Anbieter übernimmt keine Gewähr für die Unterstützung aller Dateitypen oder 
              die vollständige Entfernung aller Metadaten.
            </p>

            <h2>§ 7 Nutzungsbeschränkungen</h2>
            <p>
              Die Nutzung des Services ist nur für rechtmäßige Zwecke gestattet. Es ist untersagt:
            </p>
            <ul>
              <li>Den Service für illegale oder schädliche Zwecke zu nutzen</li>
              <li>Versuchte Manipulation oder Störung des Services</li>
              <li>Missbrauch der kostenlosen Nutzung</li>
              <li>Hochladen von schädlichen oder illegalen Inhalten</li>
            </ul>

            <h2>§ 8 Verfügbarkeit</h2>
            <p>
              Der Anbieter bemüht sich um eine hohe Verfügbarkeit des Services, kann jedoch keine 
              Garantie für eine ununterbrochene Verfügbarkeit geben. Wartungsarbeiten oder technische 
              Probleme können zu Ausfällen führen.
            </p>

            <h2>§ 9 Änderungen der AGB</h2>
            <p>
              Der Anbieter behält sich das Recht vor, diese AGB jederzeit zu ändern. Änderungen 
              werden auf dieser Seite veröffentlicht und treten mit der Veröffentlichung in Kraft.
            </p>

            <h2>§ 10 Schlussbestimmungen</h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit 
              der übrigen Bestimmungen unberührt. Es gilt deutsches Recht unter Ausschluss des 
              UN-Kaufrechts.
            </p>

            <p className="mt-8 text-sm text-gray-600">
              Stand: Dezember 2024<br />
              Anbieter: Daniel Gaschka, Vernerstraße 6, 33104 Paderborn
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
