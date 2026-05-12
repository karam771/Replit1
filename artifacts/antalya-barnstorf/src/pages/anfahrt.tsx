import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, ExternalLink } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/search/Pizzeria+%26+Imbiss+Antalya+Barnstorf/@52.7019,8.498,17z';

const contactCards = [
  {
    icon: MapPin,
    label: 'Adresse',
    content: 'Kampstraße 2\n49406 Barnstorf',
    sub: 'Außenbereich verfügbar',
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
    <div className="min-h-screen bg-background text-foreground pt-16">

      {/* Page header */}
      <div className="bg-card border-b border-border py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.3em] uppercase text-xs font-medium block mb-4">
            So finden Sie uns
          </span>
          <h1
            className="text-4xl md:text-6xl tracking-wide"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Anfahrt
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="w-16 h-px bg-border" />
          </div>
        </motion.div>
      </div>

      {/* Contact cards */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactCards.map(({ icon: Icon, label, content, sub, href, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              data-testid={`contact-card-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-card border border-border hover:border-primary/60 transition-all duration-300 p-8 flex flex-col gap-4 cursor-pointer overflow-hidden"
            >
              {/* Red left accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              <div className="flex items-center justify-between">
                <div className="w-11 h-11 bg-muted border border-border group-hover:border-primary/40 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-foreground/20 group-hover:text-primary/60 transition-colors duration-300" />
              </div>

              <div>
                <p className="text-xs text-foreground/40 tracking-widest uppercase mb-2 font-medium">
                  {label}
                </p>
                <p className="text-foreground text-lg font-serif leading-snug whitespace-pre-line group-hover:text-primary/90 transition-colors duration-300">
                  {content}
                </p>
                {sub && (
                  <p className="text-foreground/40 text-xs mt-2 leading-relaxed">{sub}</p>
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
          data-testid="maps-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 flex items-center justify-between w-full bg-primary text-white hover:bg-primary/85 transition-colors duration-300 px-8 py-5 group"
        >
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 shrink-0" />
            <div>
              <p className="text-xs text-white/60 tracking-widest uppercase mb-0.5">Google Maps</p>
              <p className="text-white font-semibold tracking-wide">Route planen</p>
            </div>
          </div>
          <svg
            className="w-5 h-5 text-white/50 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>

      {/* Full-width map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-[420px] md:h-[520px] border-t border-border"
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
