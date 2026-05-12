import { motion } from 'framer-motion';
import { Star, ImageIcon, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Atmospheric header ── */}
      <div className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 75% 55% at 50% 100%, rgba(140,30,20,0.16) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 90% 10%, rgba(20,60,30,0.10) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 py-24 md:py-32 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-10 h-10 border border-primary/40 flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-medium block mb-5">
              Seit über 21 Jahren
            </span>
            <h1
              className="text-5xl md:text-7xl tracking-wide mb-8"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Über uns
            </h1>
            <p className="text-foreground/50 font-serif italic text-base max-w-md mx-auto leading-relaxed">
              Ein Familienrestaurant mit Herz — verwurzelt in Barnstorf,
              leidenschaftlich in der Küche.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-20 h-px bg-border" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-20 h-px bg-border" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
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
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 p-5 border border-border bg-card mt-10">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i <= 4 ? 'fill-primary text-primary' : 'text-foreground/25'}`}
                  />
                ))}
              </div>
              <span className="text-foreground/75 text-sm">
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
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
              <ImageIcon className="w-14 h-14 text-foreground/12" />
              <div className="text-center">
                <p className="text-foreground/25 text-xs tracking-widest uppercase mb-1">Bild vom Lokal</p>
                <p className="text-foreground/18 text-xs">Wird noch eingefügt</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
