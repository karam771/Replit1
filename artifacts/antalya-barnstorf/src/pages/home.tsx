import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ImageIcon, Phone, UtensilsCrossed } from 'lucide-react';
const logoPath = '/images/logo.png';

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
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <p className="text-primary tracking-[0.35em] uppercase text-xs font-medium block mb-10">
              Willkommen in Barnstorf
            </p>

            <div className="flex justify-center mb-10">
              <img
                src={logoPath}
                alt="Antalya"
                className="h-36 md:h-48 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/65 mb-12 font-light leading-relaxed font-serif italic">
              Mediterrane Gastfreundschaft und handgemachte Spezialitäten —
              ein Stück Urlaub, direkt um die Ecke.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-px bg-primary/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="w-16 h-px bg-primary/50" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/speisekarte">
                <button
                  data-testid="hero-menu-btn"
                  className="w-full sm:w-auto bg-primary text-white hover:bg-primary/85 transition-colors px-10 py-4 text-sm font-semibold tracking-wide"
                >
                  Speisekarte ansehen
                </button>
              </Link>
              <a href="tel:05442804581" className="w-full sm:w-auto">
                <button
                  data-testid="hero-phone-btn"
                  className="w-full border border-white/20 text-white/80 hover:border-primary hover:text-primary transition-colors px-10 py-4 text-sm font-medium tracking-wide"
                >
                  05442 804581
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bestseller ── (same bg as hero for seamless transition) */}
      <section className="py-28 md:py-36 bg-background">
        {/* Subtle top divider */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-primary tracking-[0.25em] uppercase text-xs font-medium block mb-5">
              Ihre Favoriten
            </span>
            <h2
              className="text-4xl md:text-6xl font-semibold tracking-wide mb-6"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Bestseller
            </h2>
            <p className="text-foreground/55 text-base font-serif italic max-w-xl mx-auto">
              Das sind die Gerichte, nach denen unsere Gäste immer wieder fragen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bestsellers.map((item, idx) => (
              <motion.div
                key={idx}
                data-testid={`bestseller-card-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group border border-border bg-card hover:border-primary/50 transition-colors duration-300 overflow-hidden"
              >
                <div className="relative aspect-square bg-muted flex flex-col items-center justify-center border-b border-border overflow-hidden">
                  <ImageIcon className="w-10 h-10 text-foreground/15 mb-2" />
                  <span className="text-xs text-foreground/20 tracking-widest uppercase">Bild folgt</span>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-border group-hover:bg-primary transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Two CTAs below bestsellers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
          >
            <a href="tel:05442804581">
              <button
                data-testid="order-phone-btn"
                className="flex items-center gap-2.5 bg-primary text-white hover:bg-primary/85 transition-colors px-8 py-4 text-sm font-semibold tracking-wide"
              >
                <Phone className="w-4 h-4" />
                05442 804581
              </button>
            </a>
            <Link href="/speisekarte">
              <button
                data-testid="menu-link-btn"
                className="flex items-center gap-2.5 border border-border text-foreground/70 hover:border-primary hover:text-primary transition-colors px-8 py-4 text-sm font-medium tracking-wide"
              >
                <UtensilsCrossed className="w-4 h-4" />
                Zur Speisekarte
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
