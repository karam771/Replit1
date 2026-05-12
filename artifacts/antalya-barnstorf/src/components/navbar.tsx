import { useLocation, Link } from 'wouter';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoPath from '@assets/erasebg-transformed_2_(1)_1778623995583.png';

const navItems = [
  { path: '/',                label: 'Start' },
  { path: '/ueber-uns',      label: 'Über uns' },
  { path: '/speisekarte',    label: 'Speisekarte' },
  { path: '/oeffnungszeiten', label: 'Öffnungszeiten' },
  { path: '/anfahrt',        label: 'Anfahrt' },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'bg-background/97 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" data-testid="nav-logo" aria-label="Zur Startseite">
            <img
              src={logoPath}
              alt="Antalya Barnstorf"
              className="h-11 w-auto object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ path, label }) => {
              const active = location === path || (path !== '/' && location.startsWith(path));
              return (
                <Link
                  key={path}
                  href={path}
                  data-testid={`nav-link-${path.replace('/', '') || 'home'}`}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 hover:text-primary ${
                    active ? 'text-primary' : 'text-foreground/60'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            data-testid="nav-cta"
            href="tel:05442804581"
            className="hidden md:flex items-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-none px-5 py-2 text-xs tracking-widest uppercase"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Jetzt bestellen
          </a>

          {/* Mobile hamburger */}
          <button
            data-testid="nav-mobile-toggle"
            className="md:hidden text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setOpen(p => !p)}
            aria-label="Menü öffnen"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-border bg-background/97 px-6 pb-6 pt-4 flex flex-col gap-5">
            {navItems.map(({ path, label }) => {
              const active = location === path || (path !== '/' && location.startsWith(path));
              return (
                <Link
                  key={path}
                  href={path}
                  className={`text-sm tracking-[0.2em] uppercase transition-colors ${
                    active ? 'text-primary' : 'text-foreground/70'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="tel:05442804581"
              className="mt-2 text-center border border-primary text-primary py-3 text-xs tracking-widest uppercase"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Jetzt bestellen
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
