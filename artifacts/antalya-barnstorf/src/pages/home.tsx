import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ImageIcon, Phone, UtensilsCrossed, Star } from 'lucide-react';
const logoPath = '/images/logo.png';

const bestsellers = [
  { title: 'Döner Kebap' },
  { title: 'Pizza Kebap Hollandaise' },
  { title: 'Paninis mit Spinat und Käse' },
  { title: 'Rollo Antalya' },
];

const reviews = [
  {
    name: 'Maximilian K.',
    date: 'vor 2 Wochen',
    text: 'Wir kommen seit Jahren regelmäßig hierher und es wird einfach nicht schlechter – im Gegenteil! Der Döner ist der beste in der ganzen Region, das Fleisch immer frisch und die Soßen hausgemacht. Sehr freundliches Personal, kurze Wartezeiten. Absolute Empfehlung!',
  },
  {
    name: 'Sarah B.',
    date: 'vor einem Monat',
    text: 'Die Pizza Kebap Hollandaise ist ein Gedicht. Ich war skeptisch, aber nach dem ersten Bissen war ich überzeugt. Großzügige Portionen, faire Preise und der Laden ist immer sauber. Mein Lieblingsimbiss in Barnstorf – da geht nichts drüber.',
  },
  {
    name: 'Thomas W.',
    date: 'vor 3 Wochen',
    text: 'Super freundliches Team, man wird immer herzlich begrüßt. Das Rollo Antalya ist wirklich besonders – so etwas bekommt man nicht überall. Schneller Service auch wenn viel los ist. Sehr zufrieden, komme immer wieder gerne!',
  },
  {
    name: 'Familie Müller',
    date: 'vor 5 Tagen',
    text: 'Unser Familienrestaurant Nummer eins in der Umgebung. Auch für Kinder gibt es tolle Optionen. Die Paninis sind immer perfekt belegt und warm. Man merkt, dass hier mit Leidenschaft gekocht wird. Herzlichen Dank an das ganze Team!',
  },
];

const quickLinks = [
  {
    label: 'SPEISEKARTE',
    sub: 'Unsere Köstlichkeiten',
    href: '/speisekarte',
    isLink: true,
    bg: 'from-stone-900/60 via-stone-900/30 to-transparent',
  },
  {
    label: 'ATMOSPHÄRE',
    sub: 'Unser Restaurant',
    href: '/galerie',
    isLink: true,
    bg: 'from-stone-900/60 via-stone-900/30 to-transparent',
  },
  {
    label: 'JETZT ANRUFEN',
    sub: '05442 804581',
    href: 'tel:05442804581',
    isLink: false,
    bg: 'from-stone-900/60 via-stone-900/30 to-transparent',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Atmosphärisches Restaurant"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/50 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <p className="text-primary tracking-[0.35em] uppercase text-xs font-medium block mb-10">
              Willkommen in Barnstorf
            </p>

            <div className="flex justify-center mb-10">
              <img
                src={logoPath}
                alt="Antalya"
                className="h-36 md:h-48 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/65 mb-12 font-light leading-relaxed font-serif italic">
              Mediterrane Gastfreundschaft und handgemachte Spezialitäten —
              ein Stück Urlaub, direkt um die Ecke.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-px bg-primary/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="w-16 h-px bg-primary/50" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/speisekarte">
                <button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/85 transition-colors px-10 py-4 text-sm font-semibold tracking-wide">
                  Speisekarte ansehen
                </button>
              </Link>
              <a href="tel:05442804581" className="w-full sm:w-auto">
                <button className="w-full border border-white/20 text-white/80 hover:border-primary hover:text-primary transition-colors px-10 py-4 text-sm font-medium tracking-wide">
                  05442 804581
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3-Card Quick Links ── */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-6 pb-0">
          <div className="flex items-center gap-6 py-16">
            <div className="flex-1 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {quickLinks.map((card, i) => {
            const inner = (
              <div className="relative h-72 md:h-80 overflow-hidden group cursor-pointer">
                {/* Background placeholder with atmospheric gradient */}
                <div
                  className="absolute inset-0 bg-card transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: i === 0
                      ? 'radial-gradient(ellipse at 30% 60%, rgba(120,40,20,0.35) 0%, transparent 70%), linear-gradient(135deg, #1a1008 0%, #0e0e0e 100%)'
                      : i === 1
                      ? 'radial-gradient(ellipse at 60% 40%, rgba(20,60,30,0.4) 0%, transparent 70%), linear-gradient(135deg, #0a140d 0%, #0e0e0e 100%)'
                      : 'radial-gradient(ellipse at 50% 70%, rgba(80,20,20,0.4) 0%, transparent 70%), linear-gradient(135deg, #14080a 0%, #0e0e0e 100%)',
                  }}
                />

                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-14 h-14 text-foreground/8" />
                </div>

                {/* Bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Hover top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-foreground/45 text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
                    {card.sub}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-semibold tracking-wider text-white group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {card.label}
                  </h3>
                </div>
              </div>
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`border-t border-border ${i < 2 ? 'md:border-r' : ''}`}
              >
                {card.isLink
                  ? <Link href={card.href}>{inner}</Link>
                  : <a href={card.href}>{inner}</a>
                }
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── Bestseller ── */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-primary tracking-[0.25em] uppercase text-xs font-medium block mb-5">
              Ihre Favoriten
            </span>
            <h2
              className="text-4xl md:text-6xl font-semibold tracking-wide mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bestseller
            </h2>
            <p className="text-foreground/55 text-base font-serif italic max-w-xl mx-auto">
              Das sind die Gerichte, nach denen unsere Gäste immer wieder fragen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bestsellers.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group border border-border bg-card hover:border-primary/50 transition-colors duration-300 overflow-hidden"
              >
                <div className="relative aspect-square bg-muted flex flex-col items-center justify-center border-b border-border overflow-hidden">
                  <ImageIcon className="w-10 h-10 text-foreground/15 mb-2" />
                  <span className="text-xs text-foreground/20 tracking-widest uppercase">Bild folgt</span>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-border group-hover:bg-primary transition-colors duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
          >
            <a href="tel:05442804581">
              <button className="flex items-center gap-2.5 bg-primary text-white hover:bg-primary/85 transition-colors px-8 py-4 text-sm font-semibold tracking-wide">
                <Phone className="w-4 h-4" />
                05442 804581
              </button>
            </a>
            <Link href="/speisekarte">
              <button className="flex items-center gap-2.5 border border-border text-foreground/70 hover:border-primary hover:text-primary transition-colors px-8 py-4 text-sm font-medium tracking-wide">
                <UtensilsCrossed className="w-4 h-4" />
                Zur Speisekarte
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-24 md:py-32 bg-background" style={{ borderTop: '1px solid transparent', backgroundImage: 'linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--card)) 120px)' }}>
        {/* Decorative separator */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-border" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-semibold tracking-wide mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Was unsere Gäste sagen
            </h2>
            <p className="text-foreground/40 text-sm tracking-wide">
              Repräsentative Auswahl aus über 500 Kundenstimmen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background border border-border p-7 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-foreground/70 font-serif italic text-sm leading-relaxed flex-1">
                  „{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-xs font-semibold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{review.name}</span>
                  </div>
                  <span className="text-xs text-foreground/35">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google rating badge — 4.5 stars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <div className="flex gap-0.5 items-center">
              {/* 4 full stars */}
              {Array.from({ length: 4 }).map((_, s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
              {/* half star via clip */}
              <span className="relative inline-block w-3.5 h-3.5">
                <Star className="absolute inset-0 w-3.5 h-3.5 text-primary/30" />
                <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                </span>
              </span>
            </div>
            <span className="text-foreground/40 text-xs tracking-wide">
              4,5 / 5 · Bewertet auf Google · 500+ Rezensionen
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
