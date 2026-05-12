import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Menu() {
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
            Hausgemacht mit Liebe
          </span>
          <h1
            className="text-4xl md:text-6xl tracking-wide"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Speisekarte
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="w-16 h-px bg-border" />
          </div>
        </motion.div>
      </div>

      {/* PDF download area */}
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="border border-border bg-card p-12 md:p-20 relative"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

          <FileText className="w-14 h-14 text-primary mx-auto mb-8" />

          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Unsere vollständige Speisekarte
          </h2>
          <p className="text-foreground/60 text-base font-serif italic mb-10 leading-relaxed">
            Von Döner über Pizza bis zu Nudelgerichten — entdecken Sie
            unsere gesamte Auswahl als PDF.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/speisekarte.pdf"
              target="_blank"
              rel="noreferrer"
              data-testid="menu-pdf-open"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/85 rounded-none px-10 py-6 text-xs tracking-widest uppercase"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Speisekarte öffnen
              </Button>
            </a>
            <a
              href="/speisekarte.pdf"
              download
              data-testid="menu-pdf-download"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-10 py-6 text-xs tracking-widest uppercase"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                PDF herunterladen
              </Button>
            </a>
          </div>

          <p className="mt-8 text-foreground/35 text-xs">
            Fragen zur Speisekarte? Rufen Sie uns an:{' '}
            <a href="tel:05442804581" className="text-primary hover:underline">
              05442 804581
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
