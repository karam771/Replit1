import { motion } from 'framer-motion';
import { Clock, Phone } from 'lucide-react';

const schedule = [
  { day: 'Montag',     time: 'Geschlossen', closed: true },
  { day: 'Dienstag',   time: '11:30 – 21:50 Uhr' },
  { day: 'Mittwoch',   time: '11:30 – 21:50 Uhr' },
  { day: 'Donnerstag', time: '11:30 – 21:50 Uhr' },
  { day: 'Freitag',    time: '11:30 – 21:50 Uhr' },
  { day: 'Samstag',    time: '11:30 – 21:50 Uhr' },
  { day: 'Sonntag',    time: '12:00 – 21:50 Uhr' },
];

// Is today open? Simple helper
const todayName = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'][new Date().getDay()];

export default function Hours() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Compact header ── */}
      <div className="relative pt-16 overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 120% at 50% 120%, rgba(20,60,30,0.18) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary tracking-[0.28em] uppercase text-[10px] font-medium block mb-2">
              Wir sind für Sie da
            </span>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 border border-primary/40 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <h1
                className="text-3xl md:text-4xl tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Öffnungszeiten
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Hours card ── */}
      <section className="max-w-xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-card border border-border relative overflow-hidden"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(20,60,30,0.10) 0%, transparent 60%)' }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-primary" />

          <ul className="divide-y divide-border/40">
            {schedule.map(({ day, time, closed }, i) => {
              const isToday = day === todayName;
              return (
                <motion.li
                  key={day}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className={`flex justify-between items-center px-8 py-5 relative ${
                    isToday ? 'bg-primary/5' : ''
                  } ${closed ? 'opacity-45' : ''}`}
                >
                  {isToday && (
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary" />
                  )}
                  <div className="flex items-center gap-3">
                    <span className={`text-base font-sans ${isToday ? 'text-foreground font-semibold' : 'text-foreground/60'}`}>
                      {day}
                    </span>
                    {isToday && !closed && (
                      <span className="text-[10px] tracking-widest uppercase text-primary font-medium border border-primary/30 px-1.5 py-0.5">
                        Heute
                      </span>
                    )}
                  </div>
                  <span className={`font-medium text-sm tracking-wide ${
                    closed ? 'text-primary/60 italic' : isToday ? 'text-foreground' : 'text-foreground/75'
                  }`}>
                    {time}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </section>

      {/* ── Info strip ── */}
      <section className="max-w-xl mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
        >
          <div className="bg-card border border-border p-6 text-center">
            <p className="text-foreground/35 text-[10px] tracking-widest uppercase mb-2">Küche</p>
            <p className="text-foreground/80 text-sm font-serif italic">Bis Ladenschluss warme Küche</p>
          </div>
          <a
            href="tel:05442804581"
            className="group bg-card border border-border hover:border-primary/50 transition-colors duration-300 p-6 text-center flex flex-col items-center gap-2"
          >
            <p className="text-foreground/35 text-[10px] tracking-widest uppercase">Telefon & Bestellung</p>
            <div className="flex items-center gap-2 mt-1">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-serif text-base group-hover:underline">05442 804581</span>
            </div>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
