import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Phone, UtensilsCrossed, Star, ImageIcon } from 'lucide-react';
import imgSpeisekarte from '@assets/IMG_0831_1778665438064.jpeg';
import imgGalerie from '@assets/IMG_5031_1778665530912.jpeg';
import imgBestellen from '@assets/ebede319-d185-4925-8b01-618799560c35_1778665585089.jpeg';
const logoPath = import.meta.env.BASE_URL + 'images/logo.png';

import imgDoener from '@assets/bestseller_doener.png';
import imgPizza from '@assets/bestseller_pizza.png';
import imgPanini from '@assets/bestseller_panini.png';

const bestsellers = [
  { title: 'Döner Kebap', img: imgDoener },
  { title: 'Pizza Kebap Hollandaise', img: imgPizza },
  { title: 'Paninis mit Spinat und Käse', img: imgPanini },
  { title: 'Rollo Antalya', img: imgDoener }, // Placeholder
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
    img: imgSpeisekarte,
  },
  {
    label: 'GALERIE',
    sub: 'Unser Restaurant',
    href: '/galerie',
    isLink: true,
    img: imgGalerie,
  },
  {
    label: 'JETZT BESTELLEN',
    sub: '05442 804581',
    href: 'tel:05442804581',
    isLink: false,
    img: imgBestellen,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Mobile Background */}
          <img
            src={`${import.meta.env.BASE_URL}images/hero-mobile.jpg`}
            alt="Atmosphärisches Restaurant Mobile"
            className="block md:hidden w-full h-full object-cover object-center opacity-80"
          />
          {/* Desktop Background */}
          <img
            src={`${import.meta.env.BASE_URL}images/hero-desktop.jpg`}
            alt="Atmosphärisches Restaurant Desktop"
            className="hidden md:block w-full h-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/25 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <div className="flex justify-center mb-10">
              <img
                src={logoPath}
                alt="Antalya"
                className="h-36 md:h-48 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            <div className="flex flex-col items-center gap-3 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-primary/50" />
                <span className="text-primary/80 tracking-[0.3em] uppercase text-[10px] font-medium">
                  Barnstorf · Niedersachsen
                </span>
                <div className="w-10 h-px bg-primary/50" />
              </div>
              <p
                className="text-2xl md:text-3xl text-foreground/85 font-light leading-snug text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ein Stück Türkei,{' '}
                <span className="italic text-foreground/60">mitten in Niedersachsen.</span>
              </p>
            </div>

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

        {/* Asymmetric grid: tall portrait left + two stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr] border-t border-border">

          {/* Card 1 — Speisekarte (portrait, spans 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:row-span-2 md:border-r border-border"
          >
            <Link href="/speisekarte">
              <div className="relative h-80 md:h-full md:min-h-[580px] overflow-hidden group cursor-pointer">
                <img
                  src={imgSpeisekarte}
                  alt="Speisekarte"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-foreground/50 text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
                    Unsere Köstlichkeiten
                  </p>
                  <h3
                    className="text-2xl md:text-4xl font-semibold tracking-wide text-white group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Speisekarte
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 2 — Galerie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border-t border-border md:border-t-0"
          >
            <Link href="/galerie">
              <div className="relative h-72 md:h-[290px] overflow-hidden group cursor-pointer">
                <img
                  src={imgGalerie}
                  alt="Galerie"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-foreground/50 text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
                    Unser Restaurant
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-semibold tracking-wide text-white group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Galerie
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Card 3 — Jetzt bestellen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-border"
          >
            <a href="tel:05442804581">
              <div className="relative h-72 md:h-[290px] overflow-hidden group cursor-pointer">
                <img
                  src={imgBestellen}
                  alt="Jetzt bestellen"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-foreground/50 text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
                    05442 804581
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-semibold tracking-wide text-white group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Jetzt bestellen
                  </h3>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Bestseller ── */}
      <section className="py-16 md:py-36 bg-background">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {bestsellers.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group border border-border bg-card hover:border-primary/50 transition-colors duration-300 overflow-hidden"
              >
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-border group-hover:bg-primary transition-colors duration-300" />
                </div>

                <div className="p-3 md:p-5">
                  <h3 className="font-serif text-xs md:text-base text-foreground group-hover:text-primary transition-colors duration-300 leading-tight md:leading-snug">
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
            className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
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
      <section className="py-16 md:py-32 bg-background" style={{ borderTop: '1px solid transparent', backgroundImage: 'linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--card)) 120px)' }}>
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

      {/* ── Appetit bekommen? (Integrated) ── */}
      <section className="relative w-full h-[60vh] md:h-[80vh] min-h-[400px] md:min-h-[600px] overflow-hidden bg-black mt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-desktop.jpg`}
            alt="Appetit bekommen?"
            className="w-full h-full object-cover object-center opacity-85"
          />
          {/* Blending gradients like in the other version */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-1" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-1" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-4xl md:text-7xl font-semibold tracking-wide mb-10 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Appetit bekommen?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:05442804581" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/85 transition-colors px-10 py-4 text-sm font-semibold tracking-wide">
                  Jetzt anrufen
                </button>
              </a>
              <Link href="/speisekarte" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-white/30 text-white hover:border-primary hover:text-primary transition-colors px-10 py-4 text-sm font-medium tracking-wide backdrop-blur-sm bg-white/5">
                  Zur Speisekarte
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
