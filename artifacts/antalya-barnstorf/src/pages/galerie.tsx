import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

export default function Galerie() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="pt-16">
        {/* Page Header */}
        <div className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden border-b border-border">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse at 50% 60%, rgba(20,60,30,0.6) 0%, transparent 70%)',
              }}
            />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-primary tracking-[0.35em] uppercase text-xs font-medium block mb-6">
                Unser Restaurant
              </span>
              <h1
                className="text-5xl md:text-7xl font-semibold tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Atmosphäre
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Gallery Grid — placeholder */}
        <section className="py-20 md:py-28 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-foreground/45 font-serif italic text-base">
              Bilder folgen in Kürze.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="aspect-square bg-card border border-border flex flex-col items-center justify-center gap-2"
              >
                <ImageIcon className="w-8 h-8 text-foreground/10" />
                <span className="text-[10px] text-foreground/15 tracking-widest uppercase">
                  Bild folgt
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
