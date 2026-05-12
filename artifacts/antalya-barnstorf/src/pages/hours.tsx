import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const schedule = [
  { day: 'Montag',     time: 'Geschlossen', closed: true },
  { day: 'Dienstag',   time: '11:30 – 21:50 Uhr' },
  { day: 'Mittwoch',   time: '11:30 – 21:50 Uhr' },
  { day: 'Donnerstag', time: '11:30 – 21:50 Uhr' },
  { day: 'Freitag',    time: '11:30 – 21:50 Uhr' },
  { day: 'Samstag',    time: '11:30 – 21:50 Uhr' },
  { day: 'Sonntag',    time: '12:00 – 21:50 Uhr' },
];

export default function Hours() {
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
            Wir sind für Sie da
          </span>
          <h1
            className="text-4xl md:text-6xl tracking-wide"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Öffnungszeiten
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="w-16 h-px bg-border" />
          </div>
        </motion.div>
      </div>

      {/* Hours card */}
      <div className="max-w-xl mx-auto px-6 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="border border-border bg-card p-10 md:p-14 relative"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-primary" />

          <div className="flex flex-col items-center mb-10">
            <Clock className="w-10 h-10 text-primary mb-4" />
            <p className="text-foreground/50 text-sm font-serif italic">
              Küche bis Ladenschluss
            </p>
          </div>

          <ul className="space-y-0">
            {schedule.map(({ day, time, closed }, i) => (
              <motion.li
                key={day}
                data-testid={`hours-row-${i}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className={`flex justify-between items-center py-4 ${
                  i < schedule.length - 1 ? 'border-b border-border/40' : ''
                } ${closed ? 'opacity-50' : ''}`}
              >
                <span className="text-foreground/65 font-sans text-base">{day}</span>
                <span
                  className={`font-medium text-base ${
                    closed ? 'text-primary italic' : 'text-foreground'
                  }`}
                >
                  {time}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 pt-8 border-t border-border/40 text-center">
            <p className="text-foreground/40 text-xs tracking-widest uppercase mb-1">
              Lieferservice verfügbar
            </p>
            <a
              href="tel:05442804581"
              className="text-primary hover:underline text-sm font-serif"
            >
              05442 804581
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
