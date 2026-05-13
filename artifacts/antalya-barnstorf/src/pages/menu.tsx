import { motion } from 'framer-motion';
import { FileText, ExternalLink, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'Döner & Kebap',
    desc: 'Klassischer Döner, Lahmacun, Dürüm — frisch vom Spieß, täglich zubereitet.',
    items: ['Döner Kebap', 'Dürüm Döner', 'Lahmacun', 'Iskender'],
  },
  {
    name: 'Pizzen',
    desc: 'Hausgemachter Teig, reichhaltige Beläge — von klassisch bis mediterran.',
    items: ['Pizza Kebap Hollandaise', 'Pizza Margherita', 'Pizza Salami', 'Pizza Spezial'],
  },
  {
    name: 'Paninis & Rollos',
    desc: 'Knusprig getoastet, großzügig gefüllt — perfekt für zwischendurch.',
    items: ['Panini Spinat & Käse', 'Rollo Antalya', 'Panini Hähnchen', 'Rollo Veggie'],
  },
  {
    name: 'Nudelgerichte',
    desc: 'Warme Pasta-Kreationen, mediterran gewürzt und hausgemacht.',
    items: ['Spaghetti Bolognese', 'Penne Arabiata', 'Nudeln mit Sahnesauce', 'Tortellini'],
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Compact header ── */}
      <div className="relative pt-16 overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 120% at 50% 120%, rgba(140,30,20,0.14) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
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
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Speisekarte
              </h1>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-foreground/45 font-serif italic text-sm max-w-xs leading-relaxed md:text-right"
          >
            Von Döner über Pizza bis Nudelgerichte — für jeden Geschmack.
          </motion.p>
        </div>
      </div>

      {/* ── Category preview grid ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group bg-card border border-border hover:border-primary/40 transition-all duration-300 p-7 relative overflow-hidden"
            >
              {/* Subtle red glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(ellipse at 0% 100%, rgba(140,30,20,0.08) 0%, transparent 60%)' }} />
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-border group-hover:bg-primary/60 transition-colors duration-300" />

              <h3
                className="text-lg font-semibold tracking-wide mb-2 group-hover:text-primary transition-colors duration-300"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {cat.name}
              </h3>
              <p className="text-foreground/50 text-sm font-serif italic mb-5 leading-relaxed">
                {cat.desc}
              </p>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <li
                    key={item}
                    className="text-xs text-foreground/55 border border-border/60 px-2.5 py-1 tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PDF download card ── */}
      <section className="max-w-3xl mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border border-primary/30 bg-card p-12 md:p-16 relative text-center"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(140,30,20,0.07) 0%, transparent 70%)' }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

          <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2
            className="text-2xl md:text-3xl mb-3 tracking-wide"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Vollständige Speisekarte
          </h2>
          <p className="text-foreground/50 text-sm font-serif italic mb-10 leading-relaxed max-w-sm mx-auto">
            Alle Gerichte, Preise und Variationen — als PDF zum Öffnen oder Herunterladen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/speisekarte.pdf" target="_blank" rel="noreferrer">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/85 rounded-none px-10 py-6 text-xs tracking-widest uppercase"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Speisekarte öffnen
              </Button>
            </a>
            <a href="/speisekarte.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-10 py-6 text-xs tracking-widest uppercase"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                PDF herunterladen
              </Button>
            </a>
          </div>

          <p className="mt-8 text-foreground/30 text-xs">
            Fragen?{' '}
            <a href="tel:05442804581" className="text-primary hover:underline">
              05442 804581
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
