import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, ExternalLink } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/search/Pizzeria+%26+Imbiss+Antalya+Barnstorf/@52.7019,8.498,17z';

const contactCards = [
  {
    icon: MapPin,
    label: 'Adresse',
    content: 'Kampstraße 2\n49406 Barnstorf',
    sub: 'Parkplätze direkt vor dem Haus',
    href: MAPS_URL,
    external: true,
  },
  {
    icon: Phone,
    label: 'Telefon',
    content: '05442 804581',
    sub: 'Di – Sa 11:30 – 21:50 · So 12:00 – 21:50',
    href: 'tel:05442804581',
    external: false,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    content: '@antalyabarnstorf',
    sub: 'Aktuelle Angebote & News',
    href: 'https://www.instagram.com/antalyabarnstorf/',
    external: true,
  },
];

export default function Anfahrt() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Compact header ── */}
      <div className="relative pt-16 overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 120% at 50% 120%, rgba(140,30,20,0.13) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary tracking-[0.28em] uppercase text-[10px] font-medium block mb-2">
              So finden Sie uns
            </span>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 border border-primary/40 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <h1
                className="text-3xl md:text-4xl tracking-wide"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Anfahrt
              </h1>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-foreground/45 font-serif italic text-sm max-w-xs leading-relaxed md:text-right"
          >
            Mitten in Barnstorf — Parkplätze direkt vor der Tür.
          </motion.p>
        </div>
      </div>

      {/* ── Contact cards ── */}
      <section className="max-w-5xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactCards.map(({ icon: Icon, label, content, sub, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="group relative bg-card border border-border hover:border-primary/60 transition-all duration-300 p-8 flex flex-col gap-4 cursor-pointer overflow-hidden"
            >
              {/* Warm glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(ellipse at 0% 100%, rgba(140,30,20,0.07) 0%, transparent 60%)' }} />
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              <div className="flex items-center justify-between">
                <div className="w-11 h-11 bg-muted border border-border group-hover:border-primary/40 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-foreground/15 group-hover:text-primary/50 transition-colors duration-300" />
              </div>

              <div>
                <p className="text-[10px] text-foreground/35 tracking-widest uppercase mb-2 font-medium">
                  {label}
                </p>
                <p className="text-foreground text-lg font-serif leading-snug whitespace-pre-line group-hover:text-primary/90 transition-colors duration-300">
                  {content}
                </p>
                {sub && (
                  <p className="text-foreground/35 text-xs mt-2 leading-relaxed">{sub}</p>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Route planen CTA */}
        <motion.a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 flex items-center justify-between w-full bg-primary text-white hover:bg-primary/85 transition-colors duration-300 px-8 py-5 group"
        >
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 shrink-0" />
            <div>
              <p className="text-xs text-white/55 tracking-widest uppercase mb-0.5">Google Maps</p>
              <p className="text-white font-semibold tracking-wide">Route planen</p>
            </div>
          </div>
          <svg
            className="w-5 h-5 text-white/50 group-hover:translate-x-1 transition-transform duration-300"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </section>

      {/* ── Full-width map ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.55 }}
        className="h-[420px] md:h-[520px] border-t border-border mt-6"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.8!2d8.498!3d52.7019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b64c4b7fef5f9d%3A0x1234!2sPizzeria+%26+Imbiss+Antalya!5e0!3m2!1sde!2sde!4v1"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'invert(90%) hue-rotate(180deg) brightness(75%) contrast(120%) saturate(0.4)',
            display: 'block',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Antalya Barnstorf auf Google Maps"
        />
      </motion.div>
    </div>
  );
}
