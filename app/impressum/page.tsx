export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[-5%] top-[10%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <a
          href="/"
          className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          ← Zurück zur Startseite
        </a>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl lg:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Rechtliche Angaben
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Impressum
            </h1>
            <p className="mt-4 text-lg leading-8 text-white/65">
              Angaben gemäß § 5 TMG, § 18 Abs. 2 MStV sowie weitere gesetzlich
              erforderliche Informationen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Anbieter
              </h2>
              <p className="leading-7 text-white/75">
                BackPunkt Management GmbH
                <br />
                Schloßstraße 16
                <br />
                45468 Mülheim an der Ruhr
                <br />
                Deutschland
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Vertreten durch
              </h2>
              <p className="leading-7 text-white/75">
                Uthayakumar Shankarappillai
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">Kontakt</h2>
              <p className="leading-7 text-white/75">
                Telefon: +49 1575 7280567
                <br />
                E-Mail: info@backpunkt.de
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Registereintrag
              </h2>
              <p className="leading-7 text-white/75">
                Eintragung im Handelsregister
                <br />
                Registergericht: Amtsgericht Duisburg
                <br />
                Registernummer: HRB 39963
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Umsatzsteuer-ID
              </h2>
              <p className="leading-7 text-white/75">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
                <br />
                DE460134098
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Verantwortlich für den Inhalt
              </h2>
              <p className="leading-7 text-white/75">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
                <br />
                Uthayakumar Shankarappillai
                <br />
                Schloßstraße 16
                <br />
                45468 Mülheim an der Ruhr
                <br />
                Deutschland
              </p>
            </section>
          </div>

          <div className="mt-6 grid gap-6">
            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Aufsichtsbehörde
              </h2>
              <p className="leading-7 text-white/75">
                Zuständige Aufsichtsbehörde:
                <br />
                Ordnungsamt Mülheim an der Ruhr
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                EU-Streitschlichtung
              </h2>
              <p className="leading-7 text-white/75">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
              </p>
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <p className="mt-3 leading-7 text-white/75">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-6">
              <h2 className="mb-3 text-lg font-semibold text-white">
                Verbraucherstreitbeilegung
              </h2>
              <p className="leading-7 text-white/75">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
