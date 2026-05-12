import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ImageIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoPath from '@assets/erasebg-transformed_2_(1)_1778623995583.png';

const bestsellers = [
  { title: 'Döner Kebap' },
  { title: 'Pizza Kebap Hollandaise' },
  { title: 'Paninis mit Spinat und Käse' },
  { title: 'Rollo Antalya' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Atmosphärisches Restaurant"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <p
              className="text-primary tracking-[0.35em] uppercase text-xs font-semibold block mb-10"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Willkommen in Barnstorf
            </p>

            <div className="flex justify-center mb-10">
              <img
                src={logoPath}
                alt="Antalya"
                className="h-36 md:h-48 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/70 mb-12 font-light leading-relaxed font-serif italic">
              Mediterrane Gastfreundschaft und handgemachte Spezialitäten —
              ein Stück Urlaub, direkt um die Ecke.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-px bg-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="w-16 h-px bg-primary/60" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/speisekarte">
                <Button
                  data-testid="hero-menu-btn"
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/85 rounded-none px-10 py-6 text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  Speisekarte ansehen
                </Button>
              </Link>
              <a href="tel:05442804581" className="w-full sm:w-auto">
                <Button
                  data-testid="hero-phone-btn"
                  size="lg"
                  variant="outline"
                  className="w-full border-foreground/25 text-foreground hover:border-primary hover:text-primary rounded-none px-10 py-6 text-xs tracking-widest"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  05442 804581
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* ── Bestseller ── */}
      <section className="py-28 md:py-36 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span
              className="text-primary tracking-[0.25em] uppercase text-xs font-semibold block mb-5"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Unsere Favoriten
            </span>
            <h2
              className="text-4xl md:text-6xl font-semibold tracking-wide mb-6"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Bestseller
            </h2>
            <p className="text-foreground/60 text-base font-serif italic max-w-xl mx-auto">
              Das sind die Gerichte, nach denen unsere Gäste immer wieder fragen.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-20 h-px bg-border" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-20 h-px bg-border" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((item, idx) => (
              <motion.div
                key={idx}
                data-testid={`bestseller-card-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group border border-border bg-background overflow-hidden"
              >
                <div className="relative aspect-square bg-muted flex flex-col items-center justify-center border-b border-border overflow-hidden">
                  <ImageIcon className="w-10 h-10 text-foreground/20 mb-2" />
                  <span className="text-xs text-foreground/25 tracking-widest uppercase">Bild folgt</span>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-secondary group-hover:bg-primary transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="tel:05442804581">
              <Button
                data-testid="order-phone-btn"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-10 py-5 text-xs tracking-widest uppercase"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Jetzt bestellen: 05442 804581
              </Button>
            </a>
            <p className="mt-4 text-xs text-foreground/45 flex items-center justify-center gap-2 tracking-widest uppercase">
              <Clock className="w-3.5 h-3.5" /> Lieferservice verfügbar
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
