import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Privacy Policy | metadaten-löschen.de',
  description: 'Datenschutzerklärung für das kostenlose EXIF Daten Tool metadaten-löschen.de - Ihre Privatsphäre ist uns wichtig',
  robots: {
    index: false,
    follow: true,
  },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Daniel Gaschka</strong><br />
                Vernerstraße 6<br />
                33104 Paderborn<br />
                Deutschland
              </p>
            </div>

            <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Diese Datenschutzerklärung 
              informiert Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten 
              bei der Nutzung unseres kostenlosen Online-Tools.
            </p>

            <h2>3. Besonderheit unseres Services</h2>
            <p>
              <strong>Wichtiger Hinweis:</strong> Unser EXIF-Daten Tool verarbeitet alle Dateien ausschließlich 
              lokal in Ihrem Browser. Es werden keine Dateien an unsere Server übertragen oder dort gespeichert. 
              Dies gewährleistet maximalen Datenschutz für Ihre persönlichen Daten.
            </p>

            <h2>4. Erhebung und Verarbeitung von Daten</h2>
            
            <h3>4.1 Automatisch erfasste Daten</h3>
            <p>
              Bei jedem Besuch unserer Website werden automatisch folgende Daten erfasst:
            </p>
            <ul>
              <li>IP-Adresse des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>

            <h3>4.2 Google Analytics</h3>
            <p>
              Diese Website nutzt Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics 
              verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine 
              Analyse der Benutzung der Website durch Sie ermöglichen.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der 
              Analyse der Website-Nutzung zur Verbesserung unseres Angebots)
            </p>
            <p>
              <strong>Zweck:</strong> Analyse der Website-Nutzung, Erstellung von Statistiken, Verbesserung 
              der Benutzerfreundlichkeit
            </p>
            <p>
              <strong>Speicherdauer:</strong> 26 Monate
            </p>
            <p>
              Sie können der Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website 
              bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie der Verarbeitung dieser Daten durch 
              Google widersprechen, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin 
              herunterladen und installieren: 
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800">
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>

            <h2>5. Cookies</h2>
            <p>
              Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät 
              gespeichert werden. Sie dienen dazu, unsere Website benutzerfreundlicher, effektiver und 
              sicherer zu machen.
            </p>
            <p>
              Sie können die Speicherung von Cookies durch eine entsprechende Einstellung Ihrer 
              Browser-Software verhindern. Wir weisen jedoch darauf hin, dass Sie in diesem Fall 
              gegebenenfalls nicht alle Funktionen dieser Website vollumfänglich nutzen können.
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul>
              <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
              <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
              <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
            </ul>

            <h2>7. Datensicherheit</h2>
            <p>
              Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre 
              Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen 
              Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
            </p>

            <h2>8. Hosting</h2>
            <p>
              Diese Website wird auf Servern der Vercel Inc. gehostet. Vercel ist ein Anbieter von 
              Hosting-Dienstleistungen mit Sitz in den USA. Die Datenübertragung erfolgt auf Grundlage 
              von Standardvertragsklauseln der EU-Kommission.
            </p>

            <h2>9. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, damit sie stets den 
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in 
              der Datenschutzerklärung umzusetzen.
            </p>

            <h2>10. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Daniel Gaschka</strong><br />
                Vernerstraße 6<br />
                33104 Paderborn<br />
                Deutschland<br />
                E-Mail: info@metadaten-löschen.de
              </p>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              Stand: Dezember 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
