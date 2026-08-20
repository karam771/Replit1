import { motion } from "framer-motion";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-12">
            <p className="text-primary/70 tracking-[0.3em] uppercase text-[10px] font-medium mb-3">
              Rechtliches
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Impressum
            </h1>
            <div className="w-16 h-px bg-primary/40 mt-4" />
          </div>

          <div className="space-y-10 text-foreground/70 text-sm leading-relaxed">

            <section>
              <h2 className="text-foreground font-semibold mb-3 uppercase tracking-widest text-xs">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="font-medium text-foreground">Pizzeria Antalya Barnstorf UG (haftungsbeschränkt)</p>
              <p>Kampstraße 2</p>
              <p>49406 Barnstorf</p>
              <p>Deutschland</p>
            </section>

            <section>
              <h2 className="text-foreground font-semibold mb-3 uppercase tracking-widest text-xs">
                Vertreten durch
              </h2>
              <p>Seh Mehmet Polat (Inhaber & Geschäftsführer)</p>
            </section>

            <section>
              <h2 className="text-foreground font-semibold mb-3 uppercase tracking-widest text-xs">
                Kontakt
              </h2>
              <p>Telefon: <a href="tel:05442804581" className="text-primary hover:underline">05442 804581</a></p>
              <p>E-Mail: <a href="mailto:Antalya.Barnstorf.UG@gmx.de" className="text-primary hover:underline">Antalya.Barnstorf.UG@gmx.de</a></p>
            </section>

            <section>
              <h2 className="text-foreground font-semibold mb-3 uppercase tracking-widest text-xs">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-semibold mb-3 uppercase tracking-widest text-xs">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
                zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-semibold mb-3 uppercase tracking-widest text-xs">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

