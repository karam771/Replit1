import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, MapPin, Clock, Phone, Instagram, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'menu', 'hours', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
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
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const menuCategories = [
    {
      title: "Döner & Kebab",
      items: [
        { name: "Döner im Brot", desc: "Knuspriges Fladenbrot, Kalb- oder Hähnchenfleisch, Salat, Soße nach Wahl", price: "6,50 €" },
        { name: "Döner Teller", desc: "Fleisch nach Wahl, Pommes oder Reis, Beilagensalat", price: "11,50 €" },
        { name: "Iskender Kebab", desc: "Geschnetzeltes Fladenbrot, Fleisch, Spezial-Tomatensoße, Joghurt", price: "12,90 €" },
        { name: "Lahmacun", desc: "Türkische Pizza mit Hackfleisch, Salat, Soße", price: "7,00 €" }
      ]
    },
    {
      title: "Pizza",
      items: [
        { name: "Margherita", desc: "Tomatensoße, Käse", price: "7,50 €" },
        { name: "Salami", desc: "Tomatensoße, Käse, Salami", price: "8,50 €" },
        { name: "Thunfisch", desc: "Tomatensoße, Käse, Thunfisch, Zwiebeln", price: "9,50 €" },
        { name: "Vegetarisch", desc: "Tomatensoße, Käse, frisches Gemüse", price: "9,00 €" },
        { name: "Calzone", desc: "Gefüllte Pizzatasche", price: "10,00 €" }
      ]
    },
    {
      title: "Nudelgerichte",
      items: [
        { name: "Spaghetti Bolognese", desc: "Mit würziger Hackfleischsoße", price: "8,50 €" },
        { name: "Penne Arrabiata", desc: "Mit scharfer Tomatensoße und Knoblauch", price: "8,00 €" }
      ]
    },
    {
      title: "Salate",
      items: [
        { name: "Griechischer Salat", desc: "Eisbergsalat, Tomaten, Gurken, Oliven, Feta", price: "8,50 €" },
        { name: "Gemischter Salat", desc: "Mit Joghurt- oder Essig-Öl-Dressing", price: "7,00 €" }
      ]
    },
    {
      title: "Snacks",
      items: [
        { name: "Pommes", desc: "Portion knusprige Pommes frites", price: "3,50 €" },
        { name: "Panini", desc: "Überbacken mit Käse und Schinken", price: "5,50 €" },
        { name: "Baguette", desc: "Mit Salami, Käse, Salat", price: "6,00 €" },
        { name: "Schnitzel", desc: "Paniertes Schnitzel mit Pommes und Salat", price: "11,50 €" }
      ]
    },
    {
      title: "Getränke",
      items: [
        { name: "Softdrinks", desc: "Cola, Fanta, Sprite (0,33l)", price: "2,50 €" },
        { name: "Wasser", desc: "Still oder Sprudel (0,5l)", price: "2,00 €" },
        { name: "Ayran", desc: "Erfrischendes Joghurtgetränk", price: "2,00 €" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-xl font-bold text-primary tracking-wider">Antalya</div>
          <div className="hidden md:flex gap-8">
            {['hero', 'about', 'menu', 'hours', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${activeSection === item ? 'text-primary' : 'text-foreground/70'}`}
              >
                {item === 'hero' ? 'Start' : item === 'about' ? 'Über uns' : item === 'menu' ? 'Speisekarte' : item === 'hours' ? 'Öffnungszeiten' : 'Kontakt'}
              </button>
            ))}
          </div>
          <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => scrollTo('contact')}>
            Tisch reservieren
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Atmospheric restaurant interior" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-primary tracking-[0.3em] uppercase text-sm md:text-base font-semibold block mb-4">Willkommen in Barnstorf</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
              Pizzeria & Imbiss <br/>
              <span className="text-primary italic font-normal">Antalya</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10 font-light leading-relaxed">
              Warme, mediterrane Gastfreundschaft und handgemachte Spezialitäten. Ein Stück Urlaub, direkt um die Ecke.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-lg" onClick={() => scrollTo('menu')}>
                Speisekarte ansehen
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-foreground/30 text-foreground hover:bg-foreground/10 rounded-none px-8 py-6 text-lg" onClick={() => window.open('tel:05442804581')}>
                05442 804581
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">Tradition & Herzlichkeit</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                Seit vielen Jahren sind wir ein fester Bestandteil von Barnstorf. Bei uns trifft mediterranes Lebensgefühl auf herzliche, niedersächsische Gastfreundschaft.
              </p>
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                Ob ein schneller Döner in der Mittagspause, eine knusprige Pizza am Abend oder ein gemütliches Beisammensein mit Freunden – wir legen Wert auf frische Zutaten, authentische Rezepte und ein Lächeln für jeden Gast.
              </p>
              
              <div className="flex items-center gap-4 text-primary">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-foreground font-medium">4,4 / 5 Sternen (529 Bewertungen)</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-sm border border-border">
                <img 
                  src="/images/about-food.png" 
                  alt="Delicious Mediterranean food" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card border border-border p-6 shadow-2xl max-w-[200px] hidden md:block">
                <Utensils className="w-8 h-8 text-primary mb-4" />
                <p className="font-serif italic text-lg">"Das beste Essen der Stadt. Immer wieder gerne!"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold block mb-4">Hausgemacht</span>
            <h2 className="text-4xl md:text-6xl font-serif">Unsere Speisekarte</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 max-w-5xl mx-auto">
            {menuCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-2xl font-serif text-primary border-b border-border pb-4 mb-6">{category.title}</h3>
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                        <div className="flex-1 border-b border-dotted border-foreground/20 mx-4"></div>
                        <span className="text-lg font-serif text-primary">{item.price}</span>
                      </div>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-20">
             <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 py-6" onClick={() => window.open('tel:05442804581')}>
                Bestellung aufgeben: 05442 804581
             </Button>
             <p className="mt-4 text-sm text-foreground/60 flex items-center justify-center gap-2">
               <Clock className="w-4 h-4" /> Lieferservice verfügbar
             </p>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto bg-background/50 backdrop-blur-sm border border-border p-10 md:p-16"
          >
            <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif mb-10">Öffnungszeiten</h2>
            
            <ul className="space-y-4 text-lg">
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-foreground/70">Montag</span>
                <span className="font-medium text-primary">Geschlossen</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-foreground/70">Dienstag</span>
                <span className="font-medium">11:30 – 21:45 Uhr</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-foreground/70">Mittwoch</span>
                <span className="font-medium">11:30 – 21:45 Uhr</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-foreground/70">Donnerstag</span>
                <span className="font-medium">11:30 – 21:45 Uhr</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-foreground/70">Freitag</span>
                <span className="font-medium">11:30 – 21:45 Uhr</span>
              </li>
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-foreground/70">Samstag</span>
                <span className="font-medium">11:30 – 21:45 Uhr</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-foreground/70">Sonntag</span>
                <span className="font-medium">12:00 – 21:45 Uhr</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold block mb-4">Besuchen Sie uns</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Kontakt</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Adresse</h4>
                    <p className="text-foreground/70 text-lg">Kampstraße 2<br/>49406 Barnstorf</p>
                    <p className="text-sm text-foreground/50 mt-2 italic">Gemütlicher Außenbereich verfügbar</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Telefon</h4>
                    <a href="tel:05442804581" className="text-foreground/70 text-lg hover:text-primary transition-colors">05442 804581</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Social Media</h4>
                    <a href="https://www.instagram.com/antalyabarnstorf/" target="_blank" rel="noreferrer" className="text-foreground/70 text-lg hover:text-primary transition-colors">@antalyabarnstorf</a>
                  </div>
                </div>
              </div>
              
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6" onClick={() => window.open('https://www.google.com/maps/dir//Kampstra%C3%9Fe+2,+49406+Barnstorf', '_blank')}>
                Route planen
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[400px] lg:h-full min-h-[400px] bg-muted border border-border"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.8833!2d8.498!3d52.7019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKampstra%C3%9Fe+2%2C+49406+Barnstorf!5e0!3m2!1sde!2sde!4v1" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(120%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border text-center">
        <div className="container mx-auto px-6">
          <div className="font-serif text-2xl font-bold text-primary tracking-wider mb-6">Antalya</div>
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Pizzeria & Imbiss Antalya Barnstorf. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}