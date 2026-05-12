import { motion } from 'framer-motion';
import { Star, ImageIcon } from 'lucide-react';

export default function About() {
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
            Seit über 21 Jahren
          </span>
          <h1
            className="text-4xl md:text-6xl tracking-wide"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Über uns
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="w-16 h-px bg-border" />
          </div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-secondary to-transparent pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Tradition &amp; Herzlichkeit
            </h2>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-primary" />
              <div className="w-2 h-2 rotate-45 border border-primary" />
              <div className="w-12 h-0.5 bg-primary" />
            </div>

            <div className="space-y-6 text-foreground/75 text-lg leading-relaxed">
              <p>
                Seit über 21 Jahren sind wir ein fester Bestandteil des Herzens von Barnstorf.
                Was einst als kleines Familienlokal begann, ist heute ein Ort, zu dem die Menschen
                aus der ganzen Region kommen — für authentischen Döner, knusprige Pizzen und
                Gerichte, die nach Hause schmecken.
              </p>
              <p>
                Jedes Gericht beginnt mit der Auswahl der besten Zutaten. Frisches Gemüse,
                aromatischer Käse, feinste Gewürze und Teig, der Zeit bekommt, um perfekt zu
                werden. Wir machen keine Kompromisse, wenn es um Qualität geht — das ist es,
                was unsere Gäste seit Jahren an uns schätzen.
              </p>
              <p>
                Bei uns wird jeder willkommen geheißen — ob zum schnellen Mittagessen, für eine
                entspannte Abendrunde oder für einen gemütlichen Besuch mit der Familie.
                Wir freuen uns auf Sie.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 p-5 border border-border bg-card mt-10">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i <= 4 ? 'fill-primary text-primary' : 'text-foreground/30'}`}
                  />
                ))}
              </div>
              <span className="text-foreground/80 text-sm">
                <strong className="text-foreground">4,4 / 5</strong> — über 500 Bewertungen
              </span>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative"
          >
            <div className="aspect-[4/5] border border-border bg-muted flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

              <ImageIcon className="w-14 h-14 text-foreground/15" />
              <div className="text-center">
                <p className="text-foreground/30 text-xs tracking-widest uppercase mb-1">Bild vom Lokal</p>
                <p className="text-foreground/20 text-xs">Wird noch eingefügt</p>
              </div>
            </div>
            {/* Right accent strip */}
            <div className="absolute -right-3 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-secondary to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
