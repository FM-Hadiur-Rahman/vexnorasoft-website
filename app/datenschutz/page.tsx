import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[-5%] top-[10%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          ← Zurück zur Startseite
        </Link>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl lg:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Datenschutz
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Datenschutzerklärung
            </h1>
            <p className="mt-4 text-lg leading-8 text-white/65">
              Informationen zur Verarbeitung personenbezogener Daten auf dieser
              Website gemäß DSGVO.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                1. Verantwortlicher
              </h2>
              <p className="leading-7 text-white/75">
                BackPunkt Management GmbH
                <br />
                Schloßstraße 16
                <br />
                45468 Mülheim an der Ruhr
                <br />
                Deutschland
                <br />
                <br />
                E-Mail: info@backpunkt.de
                <br />
                Telefon: +49 1575 7280567
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                2. Allgemeine Hinweise zur Datenverarbeitung
              </h2>
              <p className="leading-7 text-white/75">
                Wir verarbeiten personenbezogene Daten der Besucher dieser
                Website nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die Verarbeitung personenbezogener Daten
                erfolgt regelmäßig nur nach Einwilligung der betroffenen Person
                oder wenn die Verarbeitung durch gesetzliche Vorschriften
                gestattet ist.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                3. Hosting und Server-Logfiles
              </h2>
              <p className="leading-7 text-white/75">
                Beim Aufruf dieser Website werden durch den Hosting-Anbieter
                technisch notwendige Informationen verarbeitet, um die Website
                bereitzustellen und die Sicherheit und Stabilität der Systeme zu
                gewährleisten. Hierzu können insbesondere gehören:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/75">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>aufgerufene Seite / Datei</li>
                <li>Browsertyp und Browserversion</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p className="mt-4 leading-7 text-white/75">
                Die Verarbeitung erfolgt zur technischen Bereitstellung der
                Website sowie zur Gewährleistung von Sicherheit und Stabilität.
              </p>
              <p className="mt-4 leading-7 text-white/75">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                4. Kontaktformular und Kontaktaufnahme
              </h2>
              <p className="leading-7 text-white/75">
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen
                lassen, werden Ihre Angaben aus dem Formular bzw. Ihrer
                Nachricht inklusive der von Ihnen dort angegebenen Kontaktdaten
                zwecks Bearbeitung der Anfrage und für den Fall von
                Anschlussfragen bei uns gespeichert und verarbeitet.
              </p>
              <p className="mt-4 leading-7 text-white/75">
                Dabei können insbesondere folgende Daten verarbeitet werden:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/75">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Firmenname</li>
                <li>gewünschte Leistung / Service</li>
                <li>Inhalt Ihrer Nachricht</li>
              </ul>
              <p className="mt-4 leading-7 text-white/75">
                Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur
                Kommunikation mit Ihnen.
              </p>
              <p className="mt-4 leading-7 text-white/75">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre
                Anfrage auf den Abschluss oder die Durchführung eines Vertrags
                gerichtet ist, sowie Art. 6 Abs. 1 lit. f DSGVO in sonstigen
                Fällen.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                5. Cookies und ähnliche Technologien
              </h2>
              <p className="leading-7 text-white/75">
                Diese Website verwendet derzeit nur technisch notwendige
                Technologien, soweit dies für den Betrieb der Website
                erforderlich ist. Soweit künftig Cookies oder ähnliche
                Technologien eingesetzt werden, die nicht technisch notwendig
                sind, erfolgt dies nur auf Grundlage einer entsprechenden
                Einwilligung.
              </p>
              <p className="mt-4 leading-7 text-white/75">
                Rechtsgrundlage für technisch notwendige Verarbeitungen ist Art.
                6 Abs. 1 lit. f DSGVO. Soweit eine Einwilligung für das
                Speichern oder Auslesen von Informationen auf Ihrem Endgerät
                erforderlich ist, richtet sich diese nach § 25 TDDDG.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                6. Empfänger personenbezogener Daten
              </h2>
              <p className="leading-7 text-white/75">
                Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies
                gesetzlich zulässig ist oder für die Erbringung unserer
                Leistungen erforderlich ist. Empfänger können insbesondere
                Hosting-Anbieter, IT-Dienstleister oder E-Mail-Dienstleister
                sein, die wir im Rahmen einer Auftragsverarbeitung einsetzen.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                7. Speicherdauer
              </h2>
              <p className="leading-7 text-white/75">
                Wir speichern personenbezogene Daten nur so lange, wie dies für
                die jeweiligen Verarbeitungszwecke erforderlich ist oder
                gesetzliche Aufbewahrungspflichten bestehen. Danach werden die
                Daten gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder
                Vertragsanbahnung erforderlich sind.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                8. Ihre Rechte
              </h2>
              <p className="leading-7 text-white/75">
                Sie haben im Rahmen der gesetzlichen Vorschriften insbesondere
                folgende Rechte:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/75">
                <li>Recht auf Auskunft</li>
                <li>Recht auf Berichtigung</li>
                <li>Recht auf Löschung</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                <li>Recht auf Widerruf einer erteilten Einwilligung</li>
                <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                9. Beschwerderecht bei einer Aufsichtsbehörde
              </h2>
              <p className="leading-7 text-white/75">
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
                über die Verarbeitung Ihrer personenbezogenen Daten zu
                beschweren.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                10. Stand dieser Datenschutzerklärung
              </h2>
              <p className="leading-7 text-white/75">
                Diese Datenschutzerklärung hat den Stand März 2026. Wir behalten
                uns vor, sie anzupassen, damit sie stets den aktuellen
                rechtlichen Anforderungen entspricht oder um Änderungen unserer
                Leistungen in der Datenschutzerklärung umzusetzen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
