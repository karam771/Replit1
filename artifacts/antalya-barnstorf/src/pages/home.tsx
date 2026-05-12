import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Instagram, Star, ShoppingBag, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoPath from '@assets/erasebg-transformed_2_(1)_1778623995583.png';

const navItems = [
  { id: 'hero',    label: 'Start' },
  { id: 'about',   label: 'Über uns' },
  { id: 'menu',    label: 'Speisekarte' },
  { id: 'hours',   label: 'Öffnungszeiten' },
  { id: 'contact', label: 'Anfahrt' },
];

const bestsellers = [
  { title: 'Döner Kebap' },
  { title: 'Pizza Kebap Hollandaise' },
  { title: 'Paninis mit Spinat und Käse' },
  { title: 'Rollo Antalya' },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const current = navItems.map(n => n.id).find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── Navbar ── */}
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/96 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            data-testid="nav-logo"
            onClick={() => scrollTo('hero')}
            className="shrink-0"
            aria-label="Zur Startseite"
          >
            <img
              src={logoPath}
              alt="Antalya Barnstorf Logo"
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                data-testid={`nav-link-${id}`}
                onClick={() => scrollTo(id)}
                className={`text-xs tracking-[0.2em] uppercase font-display transition-colors duration-200 hover:text-primary ${
                  activeSection === id ? 'text-primary' : 'text-foreground/65'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <Button
            data-testid="nav-cta"
            variant="outline"
            className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-5 py-2 text-xs tracking-widest uppercase font-display"
            onClick={() => window.open('tel:05442804581')}
          >
            Jetzt bestellen
          </Button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Atmosphärisches Restaurant"
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <p className="text-primary tracking-[0.35em] uppercase text-xs font-display font-semibold block mb-10">
              Willkommen in Barnstorf
            </p>

            {/* Logo in hero */}
            <div className="flex justify-center mb-10">
              <img
                src={logoPath}
                alt="Antalya"
                className="h-36 md:h-48 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/70 mb-12 font-light leading-relaxed font-serif italic">
              Mediterrane Gastfreundschaft und handgemachte Spezialitäten —
              ein Stück Urlaub, direkt um die Ecke.
            </p>

            {/* Decorative rule */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-px bg-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="w-16 h-px bg-primary/60" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                data-testid="hero-menu-btn"
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/85 rounded-none px-10 py-6 text-sm tracking-widest uppercase font-display"
                onClick={() => scrollTo('menu')}
              >
                Speisekarte ansehen
              </Button>
              <Button
                data-testid="hero-phone-btn"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-foreground/25 text-foreground hover:border-primary hover:text-primary rounded-none px-10 py-6 text-sm tracking-widest font-display"
                onClick={() => window.open('tel:05442804581')}
              >
                05442 804581
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* ── Über uns ── */}
      <section id="about" className="py-28 md:py-36 relative">
        {/* Subtle green side accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-secondary to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-primary tracking-[0.25em] uppercase text-xs font-display font-semibold block mb-5">
                Seit Jahren in Barnstorf
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground leading-tight">
                Tradition &<br />Herzlichkeit
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-primary" />
                <div className="w-2 h-2 rotate-45 border border-primary" />
                <div className="w-12 h-0.5 bg-primary" />
              </div>
              <p className="text-foreground/75 text-lg mb-6 leading-relaxed">
                Seit vielen Jahren sind wir ein fester Bestandteil von Barnstorf.
                Bei uns trifft mediterranes Lebensgefühl auf herzliche, niedersächsische Gastfreundschaft.
              </p>
              <p className="text-foreground/75 text-lg mb-10 leading-relaxed">
                Ob ein schneller Döner in der Mittagspause, eine knusprige Pizza am Abend
                oder ein gemütliches Beisammensein mit Freunden — wir legen Wert auf
                frische Zutaten, authentische Rezepte und ein Lächeln für jeden Gast.
              </p>

              <div className="flex items-center gap-4 p-4 border border-border bg-card">
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden border border-border">
                <img
                  src="/images/about-food.png"
                  alt="Mediterrane Spezialitäten"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Accent strip */}
              <div className="absolute -right-3 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-secondary to-transparent" />

              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-5 shadow-2xl hidden md:block max-w-[210px]">
                <ShoppingBag className="w-6 h-6 text-primary mb-3" />
                <p className="font-serif italic text-base text-foreground/90 leading-snug">
                  "Das beste Essen der Stadt. Immer wieder gerne!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bestseller ── */}
      <section id="menu" className="py-28 md:py-36 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-primary tracking-[0.25em] uppercase text-xs font-display font-semibold block mb-5">
              Unsere Favoriten
            </span>
            <h2
              className="text-4xl md:text-6xl font-display font-semibold tracking-wide"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Bestseller
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-20 h-px bg-border" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="w-20 h-px bg-border" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((item, idx) => (
              <motion.div
                key={idx}
                data-testid={`bestseller-card-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group border border-border bg-background overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="relative aspect-square bg-muted flex flex-col items-center justify-center border-b border-border overflow-hidden">
                  <ImageIcon className="w-10 h-10 text-foreground/20 mb-2" />
                  <span className="text-xs text-foreground/25 tracking-widest uppercase">Bild folgt</span>
                  {/* Green accent line at top */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-secondary group-hover:bg-primary transition-colors duration-300" />
                </div>
                {/* Title */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              data-testid="order-phone-btn"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-10 py-5 text-xs tracking-widest uppercase font-display"
              onClick={() => window.open('tel:05442804581')}
            >
              Jetzt bestellen: 05442 804581
            </Button>
            <p className="mt-4 text-xs text-foreground/45 flex items-center justify-center gap-2 tracking-widest uppercase">
              <Clock className="w-3.5 h-3.5" /> Lieferservice verfügbar
            </p>
          </div>
        </div>
      </section>

      {/* ── Öffnungszeiten ── */}
      <section id="hours" className="py-28 md:py-36 relative">
        {/* Green right accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-secondary to-transparent" />

        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="border border-border bg-card p-10 md:p-16 relative"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

            <Clock className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl mb-10 tracking-widest"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Öffnungszeiten
            </h2>

            <ul className="space-y-4 text-base text-left">
              {[
                { day: 'Montag',     time: 'Geschlossen', closed: true },
                { day: 'Dienstag',   time: '11:30 – 21:45 Uhr' },
                { day: 'Mittwoch',   time: '11:30 – 21:45 Uhr' },
                { day: 'Donnerstag', time: '11:30 – 21:45 Uhr' },
                { day: 'Freitag',    time: '11:30 – 21:45 Uhr' },
                { day: 'Samstag',    time: '11:30 – 21:45 Uhr' },
                { day: 'Sonntag',    time: '12:00 – 21:45 Uhr' },
              ].map(({ day, time, closed }, i) => (
                <li
                  key={day}
                  data-testid={`hours-row-${i}`}
                  className="flex justify-between border-b border-border/40 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-foreground/60 font-sans">{day}</span>
                  <span className={`font-medium font-sans ${closed ? 'text-primary' : 'text-foreground'}`}>
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Anfahrt / Kontakt ── */}
      <section id="contact" className="py-28 md:py-36 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary tracking-[0.25em] uppercase text-xs font-display font-semibold block mb-5">
                So finden Sie uns
              </span>
              <h2
                className="text-4xl md:text-5xl mb-8 tracking-widest"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Anfahrt
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-10" />

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg mb-1">Adresse</h4>
                    <p className="text-foreground/65 text-base leading-relaxed">
                      Kampstraße 2<br />49406 Barnstorf
                    </p>
                    <p className="text-xs text-foreground/40 mt-2 italic">
                      Außenbereich verfügbar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg mb-1">Telefon</h4>
                    <a
                      href="tel:05442804581"
                      className="text-foreground/65 text-base hover:text-primary transition-colors"
                    >
                      05442 804581
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-instagram">
                  <Instagram className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/antalyabarnstorf/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/65 text-base hover:text-primary transition-colors"
                    >
                      @antalyabarnstorf
                    </a>
                  </div>
                </div>
              </div>

              <Button
                data-testid="route-btn"
                className="bg-primary text-primary-foreground hover:bg-primary/85 rounded-none px-8 py-5 text-xs tracking-widest uppercase font-display"
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/dir//Kampstra%C3%9Fe+2,+49406+Barnstorf',
                    '_blank'
                  )
                }
              >
                Route planen
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="h-[420px] lg:h-full min-h-[420px] border border-border overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.8833!2d8.498!3d52.7019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKampstra%C3%9Fe+2%2C+49406+Barnstorf!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) brightness(75%) contrast(120%) saturate(0.4)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Antalya Barnstorf Standort"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-background py-12 border-t border-border text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <img
              src={logoPath}
              alt="Antalya Barnstorf"
              className="h-14 w-auto object-contain opacity-80"
            />
          </div>
          <p className="text-foreground/35 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Pizzeria &amp; Imbiss Antalya Barnstorf &mdash; Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
