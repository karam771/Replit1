import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MAPS_URL =
  'https://www.google.com/maps/search/Pizzeria+%26+Imbiss+Antalya+Barnstorf/@52.7019,8.498,17z';

export default function Anfahrt() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">

      {/* Page header */}
      <div className="border-b border-border bg-card py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="text-primary tracking-[0.3em] uppercase text-xs font-semibold block mb-4"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
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

      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="border border-border bg-card p-10 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-primary" />

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="text-xs tracking-widest uppercase mb-2 text-foreground/50"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      Adresse
                    </h3>
                    <p className="text-foreground text-lg font-serif leading-relaxed">
                      Kampstraße 2<br />
                      49406 Barnstorf
                    </p>
                    <p className="text-foreground/40 text-xs mt-2 italic">
                      Außenbereich verfügbar
                    </p>
                  </div>
                </div>

                <div className="border-t border-border/40" />

                {/* Phone */}
                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="text-xs tracking-widest uppercase mb-2 text-foreground/50"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      Telefon
                    </h3>
                    <a
                      href="tel:05442804581"
                      className="text-foreground text-lg font-serif hover:text-primary transition-colors"
                    >
                      05442 804581
                    </a>
                  </div>
                </div>

                <div className="border-t border-border/40" />

                {/* Instagram */}
                <div className="flex items-start gap-4" data-testid="contact-instagram">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="text-xs tracking-widest uppercase mb-2 text-foreground/50"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/antalyabarnstorf/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground text-lg font-serif hover:text-primary transition-colors"
                    >
                      @antalyabarnstorf
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps CTA */}
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="maps-cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 flex items-center justify-between w-full border border-border bg-card hover:border-primary group transition-all duration-300 p-6 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                  <Navigation className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase text-foreground/50 mb-0.5"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    Google Maps
                  </p>
                  <p className="text-foreground font-serif group-hover:text-primary transition-colors">
                    Route planen
                  </p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="border border-border overflow-hidden h-[480px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.8!2d8.498!3d52.7019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b64c4b7fef5f9d%3A0x1234!2sPizzeria+%26+Imbiss+Antalya!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) brightness(75%) contrast(120%) saturate(0.4)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Antalya Barnstorf auf Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
