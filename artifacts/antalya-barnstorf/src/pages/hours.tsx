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

      {/* ── Atmospheric header ── */}
      <div className="relative pt-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(20,60,30,0.22) 0%, transparent 70%), radial-gradient(ellipse 40% 35% at 80% 10%, rgba(140,30,20,0.08) 0%, transparent 60%)',
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
                <Clock className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-medium block mb-5">
              Wir sind für Sie da
            </span>
            <h1
              className="text-5xl md:text-7xl tracking-wide mb-8"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Öffnungszeiten
            </h1>
            <p className="text-foreground/50 font-serif italic text-base max-w-md mx-auto leading-relaxed">
              Fast jeden Tag frisch für Sie da — die Küche läuft bis Ladenschluss.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="w-20 h-px bg-border" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-20 h-px bg-border" />
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
