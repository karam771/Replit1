import { motion } from 'framer-motion';
import { FileText, ExternalLink, UtensilsCrossed, Phone, Bike } from 'lucide-react';

export default function Menu() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Compact header ── */}
      <div className="relative pt-16 overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 120% at 50% 120%, rgba(140,30,20,0.14) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary tracking-[0.28em] uppercase text-[10px] font-medium block mb-2">
              Hausgemacht mit Liebe
            </span>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 border border-primary/40 flex items-center justify-center shrink-0">
                <UtensilsCrossed className="w-4 h-4 text-primary" />
              </div>
              <h1
                className="text-3xl md:text-4xl tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Speisekarte
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-6">

        {/* ── Service info cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Lieferservice */}
          <motion.a
            href="tel:05442804581"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-300 p-7 flex flex-col gap-3 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(ellipse at 0% 100%, rgba(140,30,20,0.07) 0%, transparent 60%)' }} />
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

            <div className="w-10 h-10 bg-primary/10 border border-primary/25 flex items-center justify-center">
              <Bike className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                Lieferservice
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed">
                Wir liefern direkt zu Ihnen nach Hause. Einfach anrufen!
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1 text-primary text-sm font-medium">
              <Phone className="w-3.5 h-3.5" />
              05442 804581
            </div>
          </motion.a>

          {/* Abholung */}
          <motion.a
            href="tel:05442804581"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-300 p-7 flex flex-col gap-3 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(ellipse at 0% 100%, rgba(140,30,20,0.07) 0%, transparent 60%)' }} />
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

            <div className="w-10 h-10 bg-primary/10 border border-primary/25 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                Abholung
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed">
                Telefonisch vorbestellen und gleich abholen — schnell &amp; frisch.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1 text-primary text-sm font-medium">
              <Phone className="w-3.5 h-3.5" />
              05442 804581
            </div>
          </motion.a>
        </div>

        {/* ── PDF section ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="bg-card border border-border overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

          <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
            {/* Icon + text */}
            <div className="flex items-start gap-5 flex-1">
              <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2
                  className="text-xl md:text-2xl tracking-wide mb-1.5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Vollständige Speisekarte
                </h2>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  Alle Gerichte, Preise und Variationen — als PDF zum Öffnen oder Herunterladen.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:shrink-0">
              <a
                href="/speisekarte.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/85 transition-colors px-7 py-3 text-sm font-semibold tracking-wide whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4" />
                Speisekarte öffnen
              </a>
              <a
                href="/speisekarte.pdf"
                download
                className="flex items-center justify-center gap-2 border border-border text-foreground/65 hover:border-primary hover:text-primary transition-colors px-7 py-3 text-sm font-medium tracking-wide whitespace-nowrap"
              >
                PDF herunterladen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
