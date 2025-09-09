import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum - Legal Notice | metadaten-löschen.de',
  description: 'Impressum und rechtliche Angaben für das kostenlose EXIF Daten Tool metadaten-löschen.de',
  robots: {
    index: false,
    follow: true,
  },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-lg">
                <strong>Daniel Gaschka</strong><br />
                Vernerstraße 6<br />
                33104 Paderborn<br />
                Deutschland
              </p>
            </div>

            <h2>Kontakt</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p>
                <strong>E-Mail:</strong> info@metadaten-löschen.de<br />
                <strong>Website:</strong> https://metadaten-löschen.de
              </p>
            </div>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <strong>Kleinunternehmerregelung nach § 19 UStG</strong><br />
              Es wird keine Umsatzsteuer ausgewiesen, da der Betreiber von der Kleinunternehmerregelung 
              nach § 19 UStG Gebrauch macht.
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p>
                <strong>Daniel Gaschka</strong><br />
                Vernerstraße 6<br />
                33104 Paderborn<br />
                Deutschland
              </p>
            </div>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
              jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen 
              zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst 
              ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden 
              von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
              werden wir derartige Links umgehend entfernen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
              des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den 
              privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
              Inhalte umgehend entfernen.
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftungsausschluss</h2>
            <p>
              Die Nutzung unseres kostenlosen Online-Tools erfolgt auf eigene Gefahr. Wir übernehmen 
              keine Gewähr für die Vollständigkeit, Richtigkeit oder Verfügbarkeit des Services. 
              Der Anbieter haftet nicht für Schäden, die durch die Nutzung des Tools entstehen könnten.
            </p>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Hinweis zu unserem Service</h3>
              <p className="text-blue-800">
                Unser EXIF-Daten Tool verarbeitet alle Dateien ausschließlich lokal in Ihrem Browser. 
                Es werden keine Dateien an unsere Server übertragen oder dort gespeichert. Dies 
                gewährleistet maximalen Datenschutz für Ihre persönlichen Daten.
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
