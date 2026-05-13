import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import imgAussen from '@assets/eb48016f-2280-442e-a4cb-4e1912fe6187_1778666353090.jpeg';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Compact header ── */}
      <div className="relative pt-16 overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 120% at 50% 120%, rgba(140,30,20,0.13) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary tracking-[0.28em] uppercase text-[10px] font-medium block mb-2">
              Seit über 21 Jahren
            </span>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 border border-primary/40 flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <h1
                className="text-3xl md:text-4xl tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Über uns
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Exterior photo banner ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="relative w-full overflow-hidden"
        style={{ maxHeight: '480px' }}
      >
        <img
          src={imgAussen}
          alt="Pizzeria und Imbiss Antalya Barnstorf — Außenansicht"
          className="w-full object-cover object-center"
          style={{ maxHeight: '480px' }}
        />
        {/* Subtle gradient at top and bottom to blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
        {/* Overlay label */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 max-w-6xl mx-auto">
          <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-medium">
            Kampstraße 2 · 49406 Barnstorf
          </p>
        </div>
      </motion.div>

      {/* ── Main content ── */}
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h2
              className="text-3xl md:text-4xl mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
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
          </motion.div>

          {/* Rating card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="lg:pt-[4.5rem]"
          >
            <div className="bg-card border border-border p-7 min-w-[220px] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i <= 4 ? 'fill-primary text-primary' : 'text-foreground/20'}`}
                  />
                ))}
              </div>
              <p className="text-2xl font-semibold text-foreground mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                4,4 / 5
              </p>
              <p className="text-foreground/45 text-xs tracking-wide">
                Über 500 Bewertungen
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
